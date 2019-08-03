var cacheName = 'hello-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/assets/lasier.mp3',
  '/assets/favicon.ico',
  '/assets/mstile-70x70.png',
  '/assets/mstile-144x144.png',
  '/assets/mstile-150x150.png',
  '/assets/mstile-310x150.png',
  '/assets/mstile-310x310.png',
  '/assets/safari-pinned-tab.svg',
  '/assets/site.webmanifest',
  '/assets/electric.svg'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

/* Serve cached content when offline */
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});