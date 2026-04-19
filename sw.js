const CACHE_VERSION = 'repaso-safe-v1';
const CORE_ASSETS = ['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_VERSION).then(c => c.addAll(CORE_ASSETS))); self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', e => { if (e.request.method !== 'GET') return; e.respondWith(caches.match(e.request).then(cached => cached || fetch(e.request).then(resp => { const copy = resp.clone(); caches.open(CACHE_VERSION).then(cache => { if (e.request.url.startsWith(self.location.origin)) cache.put(e.request, copy); }); return resp; }).catch(() => caches.match('./index.html')))); });
