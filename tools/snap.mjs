// Computed-style snapshot of Catchall across 32 screens and states (desktop, tablet, phone; light and dark), for checking that a CSS change looks identical.
// usage: python3 build_catchall.py src/catchall.html /tmp/site 0 && (serve /tmp/site) && node tools/snap.mjs http://localhost:PORT/ before.json; change the CSS; snap again to after.json; python3 tools/snapdiff.py before.json after.json
import { spawn } from 'node:child_process';
import { writeFileSync, rmSync } from 'node:fs';
const [url, out] = process.argv.slice(2);
const wait = ms => new Promise(r => setTimeout(r, ms));
const T = Date.UTC(2026, 9, 8, 16, 0, 0); // fixed clock
const H = 36e5, D = 864e5;
const tags = [{ id:'t1', name:'hobby', color:'#5a8560', keyword:'' }, { id:'t2', name:'learning', color:'#4f6b9a', keyword:'' }, { id:'t3', name:'errands', color:'#a87a1e', keyword:'' }];
const N = (id, o) => ({ id, kind:'note', text:'', items:[], tags:[], pinned:false, archived:false, createdAt:T - H, updatedAt:T - H, remind:null, images:[], ...o });
const notes = [
  N('n01', { text:'Build clone rocket, Estes Alpha III body tube, print the fin can', tags:['t1'], pinned:true, color:'yellow' }),
  N('n02', { text:'Learn Quad copter: Betaflight setup, rates, then first hover', tags:['t2'], createdAt:T - 2*H }),
  N('n03', { kind:'list', text:'Learn remote car', items:[{t:'charge LiPo',done:false},{t:'check servo saver',done:false},{t:'order spare pinion',done:true}], tags:['t2'], createdAt:T - D }),
  N('n04', { text:'To call the hobby shop about the motor order', remind:{ at:T + D, repeat:null, sent:false }, createdAt:T - 3*H }),
  N('n05', { text:'Set up brainstorming board for the winter build list', createdAt:T - 4*H }),
  N('n06', { kind:'list', text:'Groceries', items:[{t:'eggs',done:true},{t:'coffee',done:false}], tags:['t3'], createdAt:T - 2*D }),
  N('n07', { text:'To charge flight batteries', remind:{ at:T + 2*H, repeat:'week', sent:false }, createdAt:T - 5*H }),
  N('n08', { text:'Watch https://www.youtube.com/watch?v=dQw4w9WgXcQ for the soldering tips', createdAt:T - 6*H }),
  N('n09', { text:'Motor sounds `code here`\n```\nnpm run build\n```', tags:['t1'], files:[{ ref:'img:fake1', name:'Voice memo', type:'audio/mp4', size:20000, dur:12 }, { ref:'img:fake2', name:'parts-list.pdf', type:'application/pdf', size:45000 }], createdAt:T - 8*D, color:'blue' }),
  N('n10', { text:'Overdue: order glue', remind:{ at:T - H, repeat:null, sent:false }, createdAt:T - 9*D }),
];
const port = 9600 + Math.floor(Math.random() * 300);
const prof = out + '.prof'; rmSync(prof, { recursive:true, force:true });
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${prof}`, '--no-first-run', '--hide-scrollbars', 'about:blank'], { stdio:'ignore' });
let ws; for (let i = 0; i < 50; i++){ try { const t = await (await fetch(`http://127.0.0.1:${port}/json`)).json(); const p = t.find(x => x.type === 'page'); if (p){ ws = new WebSocket(p.webSocketDebuggerUrl); break; } } catch {} await wait(200); }
await new Promise(r => ws.onopen = r);
let id = 0; const pend = new Map();
ws.onmessage = e => { const m = JSON.parse(e.data); if (m.id && pend.has(m.id)){ pend.get(m.id)(m); pend.delete(m.id); } if (m.method === 'Runtime.exceptionThrown') console.log('PAGE ERROR', m.params.exceptionDetails.exception?.description?.slice(0, 160)); };
const send = (method, params = {}) => new Promise(r => { const i = ++id; pend.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async expr => { const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }); if (r.result?.exceptionDetails) console.log('EVAL', expr.slice(0, 60), r.result.exceptionDetails.exception?.description?.slice(0, 120)); return r.result?.result?.value; };
await send('Page.enable'); await send('Runtime.enable');
await send('Page.addScriptToEvaluateOnNewDocument', { source: `(()=>{const T=${T};const _D=Date;class FD extends _D{constructor(...a){super(...(a.length?a:[T]))} static now(){return T}};window.Date=FD;})();` });
await send('Emulation.setEmulatedMedia', { features: [{ name:'prefers-reduced-motion', value:'reduce' }, { name:'prefers-color-scheme', value:'light' }] });
const setScheme = v => send('Emulation.setEmulatedMedia', { features: [{ name:'prefers-reduced-motion', value:'reduce' }, { name:'prefers-color-scheme', value:v }] });
const size = (w, h, mobile) => send('Emulation.setDeviceMetricsOverride', { width:w, height:h, deviceScaleFactor:1, mobile });
const phone = async on => {
  await send('Emulation.setUserAgentOverride', { userAgent: on ? 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.0 Mobile/15E148 Safari/604.1' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0 Safari/537.36' });
  await send('Emulation.setTouchEmulationEnabled', { enabled: on, maxTouchPoints: on ? 5 : 0 });
};
const fresh = async (settings = {}) => {
  await send('Page.navigate', { url }); await wait(700);
  await ev(`localStorage.clear(); localStorage.setItem('catchall.notes', ${JSON.stringify(JSON.stringify(notes))}); localStorage.setItem('catchall.tags', ${JSON.stringify(JSON.stringify(tags))}); localStorage.setItem('catchall.settings', ${JSON.stringify(JSON.stringify({ boardTags:['t1','t2','t3'], boardUpdatedAt:1, ...settings }))}); localStorage.setItem('catchall.push', JSON.stringify({topic:'catchall-snap', enabled:true, showText:true, updatedAt:1}));`);
  await send('Page.reload'); await wait(1200);
};
const PROPS = ['display','position','top','left','right','bottom','float','z-index','box-sizing','margin-top','margin-right','margin-bottom','margin-left','padding-top','padding-right','padding-bottom','padding-left','border-top-width','border-right-width','border-bottom-width','border-left-width','border-top-style','border-left-style','border-top-color','border-left-color','border-bottom-color','border-right-color','border-top-left-radius','border-bottom-right-radius','color','background-color','background-image','background-size','background-position','box-shadow','opacity','font-family','font-size','font-weight','font-style','line-height','letter-spacing','text-align','text-decoration-line','text-transform','white-space','overflow-x','overflow-y','text-overflow','flex-direction','flex-wrap','flex-grow','flex-shrink','flex-basis','justify-content','align-items','align-self','order','gap','row-gap','grid-template-columns','grid-column-start','grid-column-end','grid-template-areas','width','min-width','max-width','min-height','max-height','outline-style','outline-color','outline-width','outline-offset','visibility','cursor','transform','font-variant-numeric','caret-color','appearance','object-fit','aspect-ratio','scrollbar-width','content','pointer-events','text-underline-offset','inset'];
const grab = async () => ev(`(()=>{
  const P=${JSON.stringify(PROPS)}, out=[];
  const path=el=>{const a=[];while(el&&el.nodeType===1&&el!==document.documentElement){let i=0,s=el;while((s=s.previousElementSibling))i++;a.unshift(el.tagName.toLowerCase()+(el.id?'#'+el.id:'')+':'+i);el=el.parentElement}return a.join('>')};
  const rec=(el,pseudo)=>{const cs=getComputedStyle(el,pseudo);if(pseudo&&(cs.content==='none'||cs.content==='normal'))return;const o={};for(const p of P)o[p]=cs.getPropertyValue(p);const r=el.getBoundingClientRect();o._rect=[Math.round(r.x),Math.round(r.y+scrollY),Math.round(r.width),Math.round(r.height)].join(',');out.push([path(el)+(pseudo||''),o])};
  for(const el of document.querySelectorAll('body *')){ if(el.closest('#toasts')||el.closest('#__update-banner'))continue; rec(el); rec(el,'::before'); rec(el,'::after'); }
  rec(document.body); rec(document.documentElement);
  return out;})()`);
const states = {};
const snap = async name => { await wait(300); states[name] = await grab(); console.log('snap', name, states[name].length); };
const click = sel => ev(`(()=>{const e=document.querySelector(${JSON.stringify(sel)}); if(!e) return 'missing'; e.click(); return 'ok'})()`);
const view = async v => { await click(`[data-view="${v}"]`); await wait(300); };
// ---- desktop light
await phone(false); await size(1280, 900, false); await fresh();
await snap('d-feed');
await ev(`document.querySelector('#feed .note[data-id="n02"]').focus()`); await snap('d-feed-focus');
await click('[data-layout="grid"]'); await snap('d-feed-grid'); await click('[data-layout="list"]');
await click('.desk-head [data-act="selmode"]'); await click('#feed .note[data-id="n02"]'); await snap('d-feed-select'); await click('.selbar [data-act="selmode"]');
await ev(`(()=>{const i=document.querySelector('#q'); i.value='last week #hobby'; i.dispatchEvent(new Event('input',{bubbles:true}));})()`); await wait(400); await snap('d-feed-search');
await ev(`(()=>{const i=document.querySelector('#q'); i.value='zzzz'; i.dispatchEvent(new Event('input',{bubbles:true}));})()`); await wait(400); await snap('d-feed-noresult');
await ev(`(()=>{const i=document.querySelector('#q'); i.value=''; i.dispatchEvent(new Event('input',{bubbles:true}));})()`); await wait(400);
await ev(`document.querySelector('#q').focus()`); await snap('d-feed-qtips'); await ev(`document.activeElement.blur()`);
await click('[data-act="mklist"]'); await snap('d-feed-listmode'); await click('[data-act="exitlist"]');
await ev(`(()=>{const c=document.querySelector('#cap'); c.value='remind me tomorrow at 9am to test #hobby'; c.dispatchEvent(new Event('input',{bubbles:true}));})()`); await snap('d-feed-preview');
await ev(`(()=>{const c=document.querySelector('#cap'); c.value=''; c.dispatchEvent(new Event('input',{bubbles:true}));})()`);
await view('board'); await snap('d-board');
await view('cal'); await click('[data-act="caltoday"]'); await snap('d-cal');
await view('rem'); await snap('d-rem');
await view('sort'); await snap('d-sort');
for (let i = 0; i < 9; i++){ if ((await click('[data-act="sortkeep"]')) === 'missing') break; await wait(120); } await click('[data-sortonly="all"]'); for (let i = 0; i < 12; i++){ if ((await click('[data-act="sortkeep"]')) === 'missing') break; await wait(120); } await snap('d-sort-end');
await view('feed'); await ev(`[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Settings').click()`); await wait(400); await snap('d-settings');
await click('#setBody [data-set="close"]'); await click('#feed .note[data-id="n01"] [data-act="edit"]'); await wait(400); await snap('d-edit'); await click('#edForm [data-ed="close"]');
await click('[data-act="shortcuts"]'); await wait(300); await snap('d-shortcuts'); await click('#setBody [data-set="close"]');
// empty state
await send('Page.navigate', { url }); await wait(500); await ev(`localStorage.clear()`); await send('Page.reload'); await wait(1000); await snap('d-empty');
// ---- desktop dark
await setScheme('dark'); await fresh(); await snap('dd-feed'); await view('board'); await snap('dd-board'); await view('rem'); await snap('dd-rem');
await setScheme('light');
// ---- tablet
await size(820, 1000, false); await fresh(); await snap('t-feed');
// ---- phone
await phone(true); await size(390, 844, true); await fresh();
await snap('p-feed');
await click('#feed .note[data-id="n02"] [data-act="openacts"]'); await wait(300); await snap('p-more'); await click('.asheet .fs-done');
await click('[data-act="filters"]'); await wait(300); await snap('p-filters'); await click('.fsheet .fs-done');
await ev(`document.querySelector('#cap').focus()`); await snap('p-composer-engaged'); await ev(`document.activeElement.blur()`); await wait(300);
await view('board'); await snap('p-board');
await view('cal'); await snap('p-cal');
await view('rem'); await snap('p-rem');
await view('sort'); await snap('p-sort');
await view('feed'); await ev(`[...document.querySelectorAll('button')].find(b=>b.textContent.trim()==='Settings').click()`); await wait(400); await snap('p-settings'); await click('#setBody [data-set="close"]');
await setScheme('dark'); await fresh(); await snap('pd-feed');
writeFileSync(out, JSON.stringify(states));
ws.close(); chrome.kill(); console.log('wrote', out);
