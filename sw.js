// Catchall offline copy. Network first for the app itself (so updates and the version check
// behave exactly as without this file); the saved copy is used only when the network fails or
// takes longer than 4 seconds. Fonts are kept once fetched. Everything else passes straight through.
const CACHE = 'catchall-offline-1';
const SHELL = ['./', './manifest.webmanifest', './icon-180.png', './icon-192.png', './favicon-32.png'];
self.addEventListener('install', e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).catch(() => {})); });
self.addEventListener('activate', e => e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())));
const timeout = (ms) => new Promise((_, rej) => setTimeout(() => rej(new Error('slow')), ms));
self.addEventListener('fetch', e => {
  const r = e.request; if (r.method !== 'GET') return;
  const u = new URL(r.url);
  if (u.origin === location.origin){
    if (/version\.json$/.test(u.pathname)) return;
    const page = r.mode === 'navigate';
    if (!page && !/\.(png|webmanifest)$/.test(u.pathname)) return;
    const key = page ? './' : r;
    e.respondWith((async () => {
      const net = fetch(r).then(res => { if (res.ok){ const cp = res.clone(); caches.open(CACHE).then(c => c.put(key, cp)); } return res; });
      try { return await (page ? Promise.race([net, timeout(4000)]) : net); }
      catch (err){ const hit = await caches.match(key, { ignoreSearch: true }); if (hit) return hit; return net; }
    })());
    return;
  }
  if (u.host === 'fonts.googleapis.com' || u.host === 'fonts.gstatic.com'){
    e.respondWith(caches.open(CACHE).then(async c => { const hit = await c.match(r); const net = fetch(r).then(res => { if (res.ok || res.type === 'opaque') c.put(r, res.clone()); return res; }).catch(() => hit); return hit || net; }));
  }
});
