const CACHE_NAME="2023-09-13 09:30",urlsToCache=["/asmr-english-words/","/asmr-english-words/index.js","/asmr-english-words/data/0.tsv","/asmr-english-words/data/1.tsv","/asmr-english-words/data/2.tsv","/asmr-english-words/data/3.tsv","/asmr-english-words/data/4.tsv","/asmr-english-words/data/5.tsv","/asmr-english-words/data/6.tsv","/asmr-english-words/favicon/favicon.svg"];self.addEventListener("install",a=>{a.waitUntil(caches.open(CACHE_NAME).then(a=>a.addAll(urlsToCache)))}),self.addEventListener("fetch",a=>{a.respondWith(caches.match(a.request).then(b=>b||fetch(a.request)))}),self.addEventListener("activate",a=>{a.waitUntil(caches.keys().then(a=>Promise.all(a.filter(a=>a!==CACHE_NAME).map(a=>caches.delete(a)))))})