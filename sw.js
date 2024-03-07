// This code sets up a service worker to cache files for offline use.

let cacheName = "Perceptive"

let filesToCache = [
  "/index.html",
  "/src/style.css",
  "/src/script.js",
  "/assets/logo.ico",
  "/libs/qrcode/qrcode.js",
  "/assets/field.png",
  "/manifest.json"
]

self.addEventListener("install", function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache)
    })
  )
})

self.addEventListener("fetch", function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request)
    })
  )
})