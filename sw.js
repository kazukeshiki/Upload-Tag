const CACHE_NAME = "metadata-game-cache-v1";

const urlsToCache = [
"/",
"/index.html",
"/game.html",
"/win.html",
"/qr.html",
"/edms.png",
"/mfiles.png",
"/qr_linkedin.png",
"/clap.mp3",
"/fail.mp3"
];

/* INSTALL */

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => cache.addAll(urlsToCache))

);

});

/* FETCH */

self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)
.then(response => {

return response || fetch(event.request);

})

);

});