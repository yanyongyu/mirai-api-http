/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "55c4bfd266e84a230cf420a4ffded5dd"
  },
  {
    "url": "API.html",
    "revision": "f8a7ac93bca8217c46a6a8ffad5dd200"
  },
  {
    "url": "assets/css/0.styles.f46ac581.css",
    "revision": "3d76e72705323794d7506bfe2ab22931"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.867d45d8.svg",
    "revision": "867d45d8f9c0da0e3e733dd5e7a8d263"
  },
  {
    "url": "assets/js/10.9d2758e9.js",
    "revision": "75eff01a47196549f3906c3809a1cc54"
  },
  {
    "url": "assets/js/11.36d9e40a.js",
    "revision": "b1246b982625f6cb4bedbed2d568c8a4"
  },
  {
    "url": "assets/js/12.d2794380.js",
    "revision": "8553107168d8cc28351d7933d5e85bee"
  },
  {
    "url": "assets/js/2.09547494.js",
    "revision": "cadc1e1068df4d7072857829a2344a64"
  },
  {
    "url": "assets/js/3.1b65837f.js",
    "revision": "fbf58b9ed28208c69a0dc9c6046051fb"
  },
  {
    "url": "assets/js/4.79e06109.js",
    "revision": "d3769e05c7a0efdfebe2179e2bb6e3f0"
  },
  {
    "url": "assets/js/5.ca660288.js",
    "revision": "d12cfe72b062e33b2e1f7293f7169cde"
  },
  {
    "url": "assets/js/6.24358ea8.js",
    "revision": "9e5ed56c5db9aa6e548ab2631e6c44bf"
  },
  {
    "url": "assets/js/7.017fe42c.js",
    "revision": "8e0ff14d7a8d14848bd51ff144b7e581"
  },
  {
    "url": "assets/js/8.4614edb7.js",
    "revision": "810d737eb5b49e55ef8c20117c81965e"
  },
  {
    "url": "assets/js/9.60a9ff71.js",
    "revision": "f67ccd542cde791be68449e5343a887d"
  },
  {
    "url": "assets/js/app.71002b6c.js",
    "revision": "aaf2d07ee9e3c814fd2189744f1e3d09"
  },
  {
    "url": "EventType.html",
    "revision": "643656ce42aba99d26ca64d7306057cc"
  },
  {
    "url": "Heartbeat.html",
    "revision": "a9ee3f13cbbf3e484922c48b1caa4975"
  },
  {
    "url": "index.html",
    "revision": "88c42bffc217263a0fa4f2a957d8d23b"
  },
  {
    "url": "MessageType.html",
    "revision": "b8805e4484e87a41b09d8bc1b4edc7ef"
  },
  {
    "url": "Report.html",
    "revision": "0a9423bb2bbbf08edeb2d0c5993448a6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
