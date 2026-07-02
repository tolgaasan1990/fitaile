/* Eski service worker kendini kaldirir; ziyaretci yeni adrese yonlenir */
self.addEventListener("install", function () { self.skipWaiting(); });
self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (adlar) {
      return Promise.all(adlar.map(function (ad) { return caches.delete(ad); }));
    }).then(function () { return self.registration.unregister(); })
  );
});
