var cacheName = "soundsApp";

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) =>
        cache.addAll([
          "/index.html",
          "/styles.css",
          "/index.js",
          "/sounds/",
          "/sounds/A.mp3",
          "/sounds/B.mp3",
          "/sounds/C.mp3",
          "/sounds/D.mp3",
          "/sounds/E.mp3",
          "/sounds/F.mp3",
          "/sounds/G.mp3",
          "/sounds/H.mp3",
          "/sounds/I.mp3",
          "/sounds/J.mp3",
          "/sounds/K.mp3",
          "/sounds/L.mp3",
          "/sounds/M.mp3",
          "/sounds/N.mp3",
          "/sounds/O.mp3",
          "/sounds/P.mp3",
          "/sounds/Q.mp3",
          "/sounds/R.mp3",
          "/sounds/S.mp3",
          "/sounds/T.mp3",
          "/sounds/U.mp3",
          "/sounds/V.mp3",
          "/sounds/W.mp3",
          "/sounds/X.mp3",
          "/sounds/Y.mp3",
          "/sounds/Z.mp3",
        ])
      )
  );
});

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
