// Home-screen install, web only. Everywhere else this module reports that
// there is nothing to install, because the app is already installed.
import {Platform} from 'react-native';

let deferredPrompt = null;

// This origin used to serve the earlier vanilla-JS museum, which registered
// a service worker (sw.js) that cached its own files for offline play. A
// visitor who had that page open before this app replaced it can still have
// that old worker installed — and since it fetches network-first, it mostly
// gets out of the way on its own, but it is dead weight this app never
// wanted and never intentionally re-creates, so remove it and its caches
// the moment this app's own JS is what is actually running.
export function retireOldServiceWorker() {
  if (Platform.OS !== 'web' || typeof navigator === 'undefined' || !('serviceWorker' in navigator)) {
    return;
  }
  navigator.serviceWorker
    .getRegistrations()
    .then(registrations => registrations.forEach(registration => registration.unregister()))
    .catch(() => {});
  if (typeof caches !== 'undefined') {
    caches
      .keys()
      .then(keys => keys.filter(key => key.startsWith('city-museum-')).forEach(key => caches.delete(key)))
      .catch(() => {});
  }
}

export function watchInstallPrompt() {
  if (Platform.OS !== 'web' || typeof window === 'undefined') return () => {};
  const capture = event => {
    event.preventDefault();
    deferredPrompt = event;
  };
  const installed = () => {
    deferredPrompt = null;
  };
  window.addEventListener('beforeinstallprompt', capture);
  window.addEventListener('appinstalled', installed);
  return () => {
    window.removeEventListener('beforeinstallprompt', capture);
    window.removeEventListener('appinstalled', installed);
  };
}

export const canInstall = () => Platform.OS === 'web';

function isStandalone() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(display-mode: standalone)').matches || window.navigator?.standalone;
}

// Returns null once the browser's own install dialog has been shown, or the
// text to put in front of the player when it cannot be.
export async function promptInstall() {
  if (Platform.OS !== 'web') return null;
  if (isStandalone()) {
    return 'המוזיאון כבר מותקן ונפתח כאפליקציה. אפשר לחזור לגלריה ולהמשיך לגלות.';
  }
  if (deferredPrompt) {
    const prompt = deferredPrompt;
    deferredPrompt = null;
    await prompt.prompt();
    await prompt.userChoice;
    return null;
  }
  return /iPad|iPhone|iPod/.test(window.navigator?.userAgent || '')
    ? 'ב־Safari, פתחו את תפריט השיתוף ובחרו ״הוספה למסך הבית״. המוזיאון ייפתח כאפליקציה ויזכור את האוסף שלכם. נדרשת פתיחה מכתובת מאובטחת.'
    : 'פתחו את תפריט הדפדפן וחפשו ״התקנת אפליקציה״ או ״הוספה למסך הבית״. אם האפשרות אינה מופיעה, ייתכן שהדפדפן אינו תומך בהתקנה או שהעמוד אינו מוגש מכתובת מאובטחת.';
}
