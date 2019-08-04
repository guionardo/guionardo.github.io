importScripts('js/cache-polyfill.js');

const cacheName = 'aiai';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',  
  '/assets/lasier.mp3',
  '/assets/favicon.ico',
  '/assets/mstile-70x70.png',
  '/assets/mstile-144x144.png',
  '/assets/mstile-150x150.png',
  '/assets/mstile-310x150.png',
  '/assets/mstile-310x310.png',
  '/assets/safari-pinned-tab.svg',  
  //'/assets/electric.svg',
  '/assets/android-chrome-192x192.png',
  '/assets/android-chrome-512x512.png',
  '/assets/favicon-16x16.png',
  '/assets/favicon-32x32.png'
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
      if (response){
        console.log('Cache: ',e.request);
        return response;
      }
      console.log('Fecth: ',e.request);
      return response || fetch(e.request);
    }).catch((e)=>{
      console.error('Fetch Error ',e);
    })
  );
});