self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open('split-me').then(function(cache) {
            return cache.addAll([
                "assets/i18n/en.json",
                "3rdpartylicenses.txt",
                "favicon.ico",
                "icon.png",
                "index.html",
                "index.js",
                "main.js",
                "manifest.json",
                "polyfills.js",
                "runtime.js",
                "styles.css",
                "sw.js"
            ]);
        })
    );
});

self.addEventListener('fetch', function(e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});