const CACHE_NAME = 'munsu2-v2';
const urlsToCache = [
  '/munsu2/index.html',
  '/munsu2/manifest.json',
  '/munsu2/icon-192.png',
  '/munsu2/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
