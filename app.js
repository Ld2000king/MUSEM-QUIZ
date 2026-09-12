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
