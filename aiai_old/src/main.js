const sound = new Audio();
sound.src = 'assets/lasier.mp3';

window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js').then(() => {
                console.log("Service Worker Registered");
            }).catch((e) => {
                console.error(e);
            });
    }

    document.getElementById('play').addEventListener('click', () => {
        console.log('Ai Ai!');
        sound.play();

        // Testar se já foi instalado
        if (window.matchMedia('(display-mode: standalone)').matches) {
            console.log('display-mode is standalone');
            return;
        }
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice
            .then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the A2HS prompt');
                } else {
                    console.log('User dismissed the A2HS prompt');
                }
                deferredPrompt = null;
            });
    })
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    console.log('beforeinstallprompt ', e);    
});

window.addEventListener('appinstalled', (evt) => {
    console.log('a2hs installed', evt);
});