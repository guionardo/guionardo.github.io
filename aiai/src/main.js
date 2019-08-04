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
    })
}