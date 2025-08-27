const CACHE_NAME = 'smart-calculator-hub-v1';
const urlsToCache = [
  '/',
  '/css/styles.css',
  '/js/main.js',
  '/images/logo.webp',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
