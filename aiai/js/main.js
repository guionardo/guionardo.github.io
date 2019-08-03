window.onload = () => {
    'use strict';

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js');
    }
}

const sound = new Audio();
sound.src = 'assets/lasier.mp3';    

document.getElementById('play').addEventListener('click',()=>{
    sound.play();    
})
