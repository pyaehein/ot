importScripts('/ot/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "Overtime",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/ot/_nuxt/075c001b6ab35394c351.js",
    "revision": "a7dbfdb105d1feafc63d8333fce00631"
  },
  {
    "url": "/ot/_nuxt/4529dc6985ffeb92fbf5.js",
    "revision": "86cec61b0a1d16ce57db792b0f65dd9b"
  },
  {
    "url": "/ot/_nuxt/c96b0e68708a9ef5eb5c.js",
    "revision": "b9f858828712d9e51fe717b50d2a92be"
  },
  {
    "url": "/ot/_nuxt/d31dfd34243cad34e75b.js",
    "revision": "1e3587a751f7332e3976984cb6470bc7"
  }
])


workboxSW.router.registerRoute(new RegExp('/ot/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/ot/.*'), workboxSW.strategies.networkFirst({}), 'GET')

