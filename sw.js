const CACHE_NAME = 'static-cache-v2'
const URLS_TO_CACHE = [
  './',
  './index.html',
  './main.css',
  './main.js',
  'https://fonts.googleapis.com/css?family=Ubuntu'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => {
      return cache.addAll(URLS_TO_CACHE)
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
    .then(respose => {
      if (respose) { return respose }

      return fetch(event.request)
    })
  )
})
