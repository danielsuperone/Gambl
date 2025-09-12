// Minimal service worker to avoid 404 during registration
self.addEventListener('install', event => {
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  clients.claim();
});
self.addEventListener('fetch', event => {
  // No-op fetch handler to allow requests to pass through
});
