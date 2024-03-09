const CACHE_NAME = "2024-03-10 00:10";
const urlsToCache = [
  "/asmr-english-words/",
  "/asmr-english-words/index.js",
  "/asmr-english-words/data/0.tsv",
  "/asmr-english-words/data/1.tsv",
  "/asmr-english-words/data/2.tsv",
  "/asmr-english-words/data/3.tsv",
  "/asmr-english-words/data/4.tsv",
  "/asmr-english-words/data/5.tsv",
  "/asmr-english-words/data/6.tsv",
  "/asmr-english-words/favicon/favicon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName)),
      );
    }),
  );
});
