"""Wrap the Catchall artifact fragment into a standalone GitHub Pages app.
Usage: python3 build_catchall.py <artifact.html> <site_dir> <version>
Writes index.html, version.json, manifest.webmanifest (icons are made by make_icon.py)."""
import sys, json, re, os
src, site, version = sys.argv[1], sys.argv[2], sys.argv[3]
frag = open(src).read()
title = re.search(r'<title>(.*?)</title>', frag).group(1)
frag = re.sub(r'<title>.*?</title>\n?', '', frag, count=1)
head = f'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title}</title>
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta name="apple-mobile-web-app-title" content="{title}">
<meta name="theme-color" content="#eaeef4" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0d1119" media="(prefers-color-scheme: dark)">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" type="image/png" href="favicon-32.png">
<link rel="apple-touch-icon" href="icon-180.png">
<style>
:root{{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}}
body{{margin:0}}
img{{max-width:100%}}
[hidden]{{display:none!important}}
</style>
</head>
<body>
'''
banner = '''
<div id="__update-banner" style="display:none;position:fixed;left:0;right:0;bottom:0;z-index:99999;background:var(--shell,#2f5a3c);color:var(--shell-fg,#eef5e6);font:600 14px/1.4 -apple-system,BlinkMacSystemFont,sans-serif;padding:12px 16px;padding-bottom:calc(12px + env(safe-area-inset-bottom,0px));align-items:center;justify-content:space-between;gap:12px;box-shadow:0 -2px 12px rgb(var(--sh-rgb,0 0 0)/.35);">
  <span id="__update-msg">A newer version of __APP__ is available.</span>
  <span id="__update-actions" style="display:flex;gap:8px;flex-shrink:0;">
    <button id="__update-btn" style="font:700 13px/1 -apple-system,sans-serif;background:var(--surface,#f8fbf3);color:var(--fg,#242b25);border:0;border-radius:4px;padding:8px 14px;cursor:pointer;">Update</button>
    <button id="__dismiss-btn" style="font:600 13px/1 -apple-system,sans-serif;background:transparent;color:var(--shell-fg,#eef5e6);border:1px solid var(--shell-line,rgba(255,255,255,.24));border-radius:4px;padding:8px 14px;cursor:pointer;">Later</button>
  </span>
</div>
<script>
(function () {
  var CURRENT_VERSION = "__VERSION__";
  var banner = document.getElementById('__update-banner');
  var updateBtn = document.getElementById('__update-btn');
  var dismissBtn = document.getElementById('__dismiss-btn');

  var lastCheck = 0, applying = false;
  // Phones (iPhone/iPad Home Screen apps especially) must never navigate here: a reload or
  // URL change can hand the app a fresh, empty storage container, which once wiped notes.
  // So on phones the new page is swapped in place. Computers reload normally, which is safe.
  var isPhone = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
  function busy() {
    if (typeof window.__appBusy === 'function') { try { return !!window.__appBusy(); } catch (e) {} }
    var a = document.activeElement;
    return !!document.querySelector('dialog[open]') || !!(a && /INPUT|TEXTAREA/.test(a.tagName) && a.value);
  }
  function showBanner() { banner.style.display = 'flex'; }
  // Fetch the page past every cache (GitHub's CDN can serve the old page for ~10 minutes after
  // a deploy) and only accept it if it really is the version version.json announced.
  function applyUpdate(want) {
    if (applying) return Promise.resolve(false);
    applying = true;
    return fetch('./?_=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.text(); })
      .then(function (html) {
        if (want && html.indexOf('CURRENT_VERSION = "' + want + '"') < 0) throw new Error('not live yet');
        try { sessionStorage.setItem('__updatedTo', want || ''); } catch (e) {}
        // Refresh the browser's stored copy so the next launch opens the new version too.
        return fetch('./', { cache: 'reload' }).then(function (r) { return r.ok ? r.text() : ''; }, function () { return ''; })
          .then(function (stored) {
            if (!isPhone && stored.indexOf('CURRENT_VERSION = "' + want + '"') >= 0) { location.reload(); return true; }
            document.open(); document.write(html); document.close();
            return true;
          });
      })
      .catch(function () { applying = false; return false; });
  }
  function checkVersion(auto) {
    lastCheck = Date.now();
    return fetch('./version.json?_=' + Date.now(), { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (data) {
        var newer = !!(data && data.version && data.version !== CURRENT_VERSION);
        if (!newer) return false;
        // On launch or when the app comes back to the front, install it straight away unless
        // the person is in the middle of something; otherwise offer the Update button.
        if (auto === true && !busy()) return applyUpdate(data.version).then(function (ok) { if (!ok) showBanner(); return true; });
        banner.dataset.want = data.version;
        showBanner();
        return true;
      })
      .catch(function () { return null; /* offline or blocked -- say nothing */ });
  }
  window.__appVersion = CURRENT_VERSION;
  window.__checkForUpdate = checkVersion;

  updateBtn.addEventListener('click', function () {
    updateBtn.textContent = 'Updating…';
    updateBtn.disabled = true;
    applyUpdate(banner.dataset.want).then(function (ok) {
      if (ok) return;
      updateBtn.textContent = 'Update';
      updateBtn.disabled = false;
      document.getElementById('__update-msg').textContent = 'The new version is still reaching GitHub. Try again in a minute.';
    });
  });

  // Say so after an update, so it's clear it happened.
  try {
    var to = sessionStorage.getItem('__updatedTo');
    if (to) {
      sessionStorage.removeItem('__updatedTo');
      if (to === CURRENT_VERSION) {
        document.getElementById('__update-msg').textContent = '__APP__ updated to version ' + CURRENT_VERSION + '.';
        document.getElementById('__update-actions').style.display = 'none';
        showBanner();
        setTimeout(function () { banner.style.display = 'none'; document.getElementById('__update-actions').style.display = 'flex'; document.getElementById('__update-msg').textContent = 'A newer version of __APP__ is available.'; }, 4000);
      }
    }
  } catch (e) {}

  dismissBtn.addEventListener('click', function () {
    banner.style.display = 'none';
  });

  if (document.readyState === 'complete') {
    checkVersion(true);
  } else {
    addEventListener('load', function () { checkVersion(true); });
  }
  // A desktop app window never becomes "hidden" when you click another window, so also check on focus and every 15 minutes.
  document.addEventListener('visibilitychange', function () { if (!document.hidden) checkVersion(true); });
  addEventListener('focus', function () { if (Date.now() - lastCheck > 60000) checkVersion(); });
  clearInterval(window.__updateTimer);
  window.__updateTimer = setInterval(checkVersion, 15 * 60 * 1000);
})();
</script>
</body>
</html>
'''.replace('__APP__', title).replace('__VERSION__', version)
open(os.path.join(site, 'index.html'), 'w').write(head + frag + banner)
json.dump({'version': version}, open(os.path.join(site, 'version.json'), 'w'), indent=2)
manifest = {
  'name': title, 'short_name': title, 'start_url': './', 'scope': './', 'display': 'standalone',
  'background_color': '#eaeef4', 'theme_color': '#2a43c4',
  'icons': [
    {'src': 'icon-192.png', 'sizes': '192x192', 'type': 'image/png'},
    {'src': 'icon-512.png', 'sizes': '512x512', 'type': 'image/png'},
    {'src': 'icon-maskable-512.png', 'sizes': '512x512', 'type': 'image/png', 'purpose': 'maskable'}]}
json.dump(manifest, open(os.path.join(site, 'manifest.webmanifest'), 'w'), indent=2)
print('built', title, 'v' + version)
