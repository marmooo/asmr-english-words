var CACHE_NAME="2022-12-14 09:55",urlsToCache=["/asmr-english-words/","/asmr-english-words/index.js","/asmr-english-words/data/0.tsv","/asmr-english-words/data/1.tsv","/asmr-english-words/data/2.tsv","/asmr-english-words/data/3.tsv","/asmr-english-words/data/4.tsv","/asmr-english-words/data/5.tsv","/asmr-english-words/data/6.tsv","/asmr-english-words/favicon/favicon.svg","https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"];self.addEventListener("install",function(a){a.waitUntil(caches.open(CACHE_NAME).then(function(a){return a.addAll(urlsToCache)}))}),self.addEventListener("fetch",function(a){a.respondWith(caches.match(a.request).then(function(b){return b||fetch(a.request)}))}),self.addEventListener("activate",function(a){var b=[CACHE_NAME];a.waitUntil(caches.keys().then(function(a){return Promise.all(a.map(function(a){if(b.indexOf(a)===-1)return caches.delete(a)}))}))})