const CACHE = 'russian-tools-v8';
const FILES = [
  '/russian-tools/',
  '/russian-tools/index.html',
  '/russian-tools/ch123_quiz.html',
  '/russian-tools/russian_verb_conjugator.html',
  '/russian-tools/stats.html',
  '/russian-tools/manifest.json',
  '/russian-tools/icon.png',
  '/russian-tools/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys =>
    Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
  ));
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
