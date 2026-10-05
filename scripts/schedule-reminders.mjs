// Sends Catchall reminders to your phone through ntfy (https://ntfy.sh).
// ntfy.sh can't take back a queued message, so this only queues reminders due in the
// next 45 minutes (exact time via the At header), and sends anything up to 3 hours
// overdue straight away in case GitHub ran this job late. Skips reminders an open copy
// of Catchall already queued (remind.queued), and remembers its own sends in a cache.
// Env: GIST_ID, GIST_OWNER, STATE_FILE, DATA_FILE (local test input), DRY_RUN=1.
import fs from 'node:fs';

const { GIST_ID, GIST_OWNER = 'KrackenC', STATE_FILE = '.push-state/state.json', DRY_RUN } = process.env;
const NTFY = 'https://ntfy.sh/', APP_URL = 'https://krackenc.github.io/catchall/';
const AHEAD = 45 * 60e3, CATCH_UP = 3 * 36e5;

const daysIn = d => new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
function nextOccurrence(at, repeat, now) {
  const d = new Date(at);
  const step = () => {
    if (repeat === 'day') d.setDate(d.getDate() + 1);
    else if (repeat === 'weekday') { do d.setDate(d.getDate() + 1); while (d.getDay() === 0 || d.getDay() === 6); }
    else if (repeat === 'week') d.setDate(d.getDate() + 7);
    else if (repeat === 'month') { const day = d.getDate(); d.setDate(1); d.setMonth(d.getMonth() + 1); d.setDate(Math.min(day, daysIn(d))); }
    else if (repeat === 'year') d.setFullYear(d.getFullYear() + 1);
  };
  let guard = 0; do { step(); } while (d.getTime() <= now && ++guard < 5000);
  return d.getTime();
}
const active = n => n && !n.deleted && !n.archived && n.remind && !n.remind.sent;
const label = n => n.kind === 'list' ? (n.text || (n.items || []).map(i => i.t).join(', ') || 'List') : (n.text || 'Reminder');

async function loadData() {
  if (process.env.DATA_FILE) return JSON.parse(fs.readFileSync(process.env.DATA_FILE, 'utf8'));
  if (!GIST_ID) throw new Error('GIST_ID is not set');
  const r = await fetch(`https://gist.githubusercontent.com/${GIST_OWNER}/${GIST_ID}/raw/catchall.json?t=${Date.now()}`, { cache: 'no-store' });
  if (!r.ok) throw new Error('Could not read the gist: HTTP ' + r.status);
  return r.json();
}

const data = await loadData();
const push = data.push || {};
if (!push.enabled || !push.topic) { console.log('Phone notifications are off; nothing to do.'); process.exit(0); }
let state = {};
try { state = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch {}
const now = Date.now();
const call = async (method, id, body, headers) => {
  if (DRY_RUN) { console.log('[dry run]', method, id, headers?.At ? new Date(+headers.At * 1000).toISOString() : '', body || ''); return true; }
  const r = await fetch(NTFY + encodeURIComponent(push.topic) + '/' + id, { method, body, headers });
  if (!r.ok) console.log(`ntfy ${method} ${id} -> HTTP ${r.status}`);
  return r.ok;
};

let queued = 0, late = 0;
const keep = now - 4 * 864e5;
for (const n of data.notes || []) {
  if (!active(n)) continue;
  const r = n.remind, times = [r.at];
  if (r.repeat && r.at <= now + 15e3) times.push(nextOccurrence(r.at, r.repeat, now));
  for (const t of times) {
    const key = n.id + '@' + t;
    if (state[key] || r.queued === t) continue;
    const text = push.showText === false ? 'Open Catchall to see it.' : label(n);
    const headers = { Title: 'Catchall reminder', Tags: 'pushpin', Priority: '4', Click: APP_URL };
    if (t > now + 15e3 && t <= now + AHEAD) headers.At = String(Math.floor(t / 1000));
    else if (t > now + 15e3 || t < now - CATCH_UP) continue;
    if (await call('POST', n.id, text, headers)) { state[key] = t; headers.At ? queued++ : late++; }
  }
}
for (const k of Object.keys(state)) if (state[k] < keep) delete state[k];
fs.mkdirSync(STATE_FILE.replace(/\/[^/]+$/, ''), { recursive: true });
fs.writeFileSync(STATE_FILE, JSON.stringify(state));
console.log(`Queued ${queued}, sent ${late} late, remembering ${Object.keys(state).length}.`);
