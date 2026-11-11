// Offline cache for Listen 30 and Talk Shop (GitHub Pages).
// Pages: network first, so new versions arrive; cached copy when offline.
// Fonts: cache first.
const CACHE = "listen30-v5";
const PAGES = ["./", "./index.html", "./speak/", "./speak/index.html", "./meetings.js", "./config.js", "./sync.js"];
self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(PAGES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  const isOwnPage = url.origin === self.location.origin && (req.mode === "navigate" || /\.html$|\/$|meetings\.js$|config\.js$|sync\.js$/.test(url.pathname));
  if (isFont) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })));
  } else if (isOwnPage) {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return res; })
      .catch(() => caches.match(req, { ignoreSearch: true }).then(hit => hit || caches.match(url.pathname.includes("/speak/") ? "./speak/index.html" : "./index.html"))));
  }
});
