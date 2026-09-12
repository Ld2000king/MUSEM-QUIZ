let installPrompt = null;
const installDialog = document.getElementById('installDialog');
window.addEventListener('beforeinstallprompt', event => { event.preventDefault(); installPrompt = event; });
document.getElementById('install').addEventListener('click', async () => {
  if (window.matchMedia('(display-mode: standalone)').matches || navigator.standalone) {
    document.getElementById('installText').textContent = 'המוזיאון כבר מותקן ונפתח כאפליקציה. אפשר לחזור לגלריה ולהמשיך לגלות.';
  } else if (installPrompt) {
    const prompt = installPrompt;
    installPrompt = null;
    await prompt.prompt();
    await prompt.userChoice;
    return;
  } else {
    document.getElementById('installText').textContent = /iPad|iPhone|iPod/.test(navigator.userAgent)
      ? 'ב־Safari, פתחו את תפריט השיתוף ובחרו ״הוספה למסך הבית״. המוזיאון ייפתח כאפליקציה ויזכור את האוסף שלכם. נדרשת פתיחה מכתובת מאובטחת.'
      : 'פתחו את תפריט הדפדפן וחפשו ״התקנת אפליקציה״ או ״הוספה למסך הבית״. אם האפשרות אינה מופיעה, ייתכן שהדפדפן אינו תומך בהתקנה או שהעמוד אינו מוגש מכתובת מאובטחת.';
  }
  installDialog.showModal();
});
document.querySelectorAll('.close-install').forEach(button => button.addEventListener('click', () => installDialog.close()));
window.addEventListener('appinstalled', () => { installPrompt = null; });
if ('serviceWorker' in navigator && window.isSecureContext) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}
// Keep the answer controls reachable when the software keyboard opens.
const museumShell = document.querySelector('.mobile-app');
function updateKeyboardLayout() {
  const viewport = window.visualViewport;
  const editing = document.activeElement === document.getElementById('answer');
  const keyboardOpen = Boolean(viewport && editing && window.innerHeight - viewport.height > 120);
  museumShell.classList.toggle('keyboard-open', keyboardOpen);
  if (keyboardOpen) {
    museumShell.style.height = `${viewport.height}px`;
    document.getElementById('answer').scrollIntoView({block:'nearest'});
  } else museumShell.style.removeProperty('height');
}
window.visualViewport?.addEventListener('resize', updateKeyboardLayout);
document.getElementById('answer').addEventListener('focus', updateKeyboardLayout);
document.getElementById('answer').addEventListener('blur', updateKeyboardLayout);
function updateConnectionStatus() {
  const badge = document.getElementById('connectionStatus');
  badge.hidden = navigator.onLine;
  badge.textContent = navigator.onLine ? '' : 'ללא חיבור';
}
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);
updateConnectionStatus();
// Let the player pick the gallery room's wall and floor: dark walnut or light oak.
(function () {
  const THEME_KEY = 'cityMuseum.roomTheme';
  const darkButton = document.getElementById('themeDark');
  const lightButton = document.getElementById('themeLight');
  let theme = 'dark';
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch {}
  function applyRoomTheme(next) {
    theme = next;
    document.documentElement.dataset.roomTheme = theme;
    darkButton?.setAttribute('aria-pressed', String(theme === 'dark'));
    lightButton?.setAttribute('aria-pressed', String(theme === 'light'));
    try { localStorage.setItem(THEME_KEY, theme); } catch {}
  }
  applyRoomTheme(theme);
  darkButton?.addEventListener('click', () => applyRoomTheme('dark'));
  lightButton?.addEventListener('click', () => applyRoomTheme('light'));
})();
