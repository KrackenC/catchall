// Files messages sent to the "Save to Catchall" inbox (an ntfy.sh topic, by the iPhone shortcut or by email) into the synced gist as notes,
// so they're saved even when no copy of Catchall is open (ntfy.sh only keeps messages for 12 hours).
// It uses the app's own parser, copied out of src/catchall.html at run time, so "remind me …",
// #hashtags, tag keywords and "- " lists behave exactly as when typed in the app. Each note's id comes
// from the ntfy message id, so the app and this job never file the same message twice.
// Photos sent through the inbox are left for the app to pick up, since ntfy keeps attachments 3 hours
// and photos need the app's photo store.
// Env: GIST_ID, GIST_TOKEN (gist scope; without it this step is skipped), OUT_FILE (merged data for
// the reminders step), SRC (default src/catchall.html), DRY_RUN=1.
import fs from 'node:fs';
import vm from 'node:vm';

const { GIST_ID, GIST_TOKEN, OUT_FILE = '.inbox-data.json', SRC = 'src/catchall.html', DRY_RUN } = process.env;
const FILE = 'catchall.json';
if (!GIST_ID || !GIST_TOKEN){ console.log('No GIST_TOKEN secret; the app files inbox messages when it is open.'); process.exit(0); }

const gh = async (path, opts = {}) => {
  const r = await fetch('https://api.github.com' + path, { ...opts, headers: { Authorization: 'Bearer ' + GIST_TOKEN, Accept: 'application/vnd.github+json', 'Content-Type': 'application/json' } });
  if (!r.ok) throw new Error(`GitHub ${opts.method || 'GET'} ${path} -> HTTP ${r.status}`);
  return r.json();
};
const g = await gh('/gists/' + GIST_ID);
const f = g.files[FILE];
const data = JSON.parse(f.truncated ? await (await fetch(f.raw_url)).text() : f.content);
const inbox = data.inbox || {};
if (!inbox.enabled || !inbox.topic){ console.log('Save from iPhone is off; nothing to do.'); process.exit(0); }

const r = await fetch(`https://ntfy.sh/${encodeURIComponent(inbox.topic)}/json?poll=1&since=24h`);
if (!r.ok) throw new Error('ntfy poll -> HTTP ' + r.status);
const msgs = (await r.text()).split('\n').filter(Boolean).map(l => { try { return JSON.parse(l); } catch { return null; } })
  .filter(m => m && m.event === 'message');
const have = new Set((data.notes || []).map(n => n.id));
const fresh = msgs.filter(m => !have.has('nx' + m.id) && !(m.attachment && /^image\//.test(m.attachment.type || '')));
if (!fresh.length){ console.log(`Inbox: ${msgs.length} message(s), nothing new.`); process.exit(0); }

// The app's parser, run in the owner's time zone so "at 9am" means their 9am.
if (data.tz) process.env.TZ = data.tz;
const src = fs.readFileSync(SRC, 'utf8');
const parsing = src.slice(src.indexOf('/* ---------- parsing ---------- */'), src.indexOf('/* ---------- formatting ---------- */'));
const colors = (src.match(/const COLORS = \[[\s\S]*?\];/) || ['const COLORS = [["Gray","#868c99"]];'])[0];
const ctx = { S: { tags: data.tags || [] }, Date, Math, console };
vm.createContext(ctx);
vm.runInContext(`${colors}\n${parsing}\nthis.parseCapture = parseCapture; this.inboxText = inboxText; this.COLORS = COLORS;`, ctx);

const now = Date.now();
for (const m of fresh){
  // Long emails arrive as a text attachment; read it while ntfy still has it.
  let longBody = null;
  if (m.attachment && /^text\/plain/.test(m.attachment.type || '') && (m.attachment.size || 0) < 2e5){ try { longBody = await (await fetch(m.attachment.url)).text(); } catch {} }
  const { raw, via } = ctx.inboxText(m, longBody);
  if (!raw) continue;
  const pc = ctx.parseCapture(raw);
  const tags = [...pc.tagIds];
  for (const name of pc.newTags){
    let t = data.tags.find(x => x.name.toLowerCase() === name.toLowerCase());
    if (!t){ t = { id: 't' + now.toString(36) + Math.random().toString(36).slice(2, 7), name: name.toLowerCase(), color: ctx.COLORS[data.tags.length % ctx.COLORS.length][1], keyword: '' }; data.tags.push(t); data.tagsUpdatedAt = now; }
    if (!tags.includes(t.id)) tags.push(t.id);
  }
  const at = (m.time || now / 1000) * 1000;
  data.notes.push({ id: 'nx' + m.id, kind: pc.kind, text: pc.text, items: pc.items, tags, pinned:false, archived:false, createdAt: at, updatedAt: now, remind: pc.remind, images: [], via });
  console.log('Filed:', JSON.stringify(pc.text).slice(0, 60), pc.remind ? '(reminder ' + new Date(pc.remind.at).toString() + ')' : '');
}
data.savedAt = now;
fs.writeFileSync(OUT_FILE, JSON.stringify(data));
if (DRY_RUN){ console.log('[dry run] not saving to the gist'); process.exit(0); }
await gh('/gists/' + GIST_ID, { method: 'PATCH', body: JSON.stringify({ files: { [FILE]: { content: JSON.stringify(data) } } }) });
console.log(`Filed ${fresh.length} inbox message(s) into Catchall.`);
