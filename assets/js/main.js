import Alpine from 'alpinejs';
window.Alpine = Alpine;
Alpine.start();

// Service Worker for PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js');
  });
}
