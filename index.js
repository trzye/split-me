const installButton = document.getElementById('pwa-install');

let installPrompt = null;
installButton.style.display = 'none';

window.addEventListener('beforeinstallprompt', (prompt) => {
    installPrompt = prompt;
    installButton.style.display = 'block';
    installButton.addEventListener('click', (e) => {
        installButton.style.display = 'none';
        installPrompt.prompt();
        installPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log(' User accepted installation.');
            } else {
                console.log(' User refused installation.');
            }
            deferredPrompt = null;
        });
    });
});

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register("sw.js").then(function() {
        console.log(" Service worker is enabled.")
    });
}

document.addEventListener('touchstart', touchstartHandler, {passive: false});
document.addEventListener('touchmove', touchmoveHandler, {passive: false});
