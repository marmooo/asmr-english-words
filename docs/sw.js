const CACHE_NAME="2024-05-27 11:00",urlsToCache=["/asmr-english-words/","/asmr-english-words/index.js","/asmr-english-words/data/0.tsv","/asmr-english-words/data/1.tsv","/asmr-english-words/data/2.tsv","/asmr-english-words/data/3.tsv","/asmr-english-words/data/4.tsv","/asmr-english-words/data/5.tsv","/asmr-english-words/data/6.tsv","/asmr-english-words/favicon/favicon.svg"];self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE_NAME).then(e=>e.addAll(urlsToCache)))}),self.addEventListener("fetch",e=>{e.respondWith(caches.match(e.request).then(t=>t||fetch(e.request)))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(e=>Promise.all(e.filter(e=>e!==CACHE_NAME).map(e=>caches.delete(e)))))})