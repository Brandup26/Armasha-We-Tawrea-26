// غير السطر الأول فقط في ملف sw.js إلى v2
const CACHE_NAME = 'polo-frita-v2'; 
const CACHE_NAME = 'qarmasha-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'images/loggo.jpg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
