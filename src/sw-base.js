importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.1.1/workbox-sw.js")

// self.addEventListener('message', (event) => {
//   if (event.data && event.data.type === 'SKIP_WAITING') {
//     self.skipWaiting()
//   }
// })

// use Cache First (Cache Falling Back to Network) strategy for images from Cloud Storage
workbox.routing.registerRoute(
    /.*(:?firebasestorage\.googleapis)\.com.*$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'thumnails'
    })
)


workbox.precaching.precacheAndRoute([])

workbox.routing.registerNavigationRoute("/index.html", {
    blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
  })
  
