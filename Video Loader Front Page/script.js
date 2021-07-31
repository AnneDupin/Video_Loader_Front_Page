let video = document.querySelector('.video');
let violet = document.querySelector('.russian-violet');
let btn = document.getElementById('play-pause');
let muteBtn = document.getElementById('mute');
let volumeslider = document.getElementById('volumeSlider');
let russianBar = document.querySelector('.russian-bar');


function togglePlayPause() {
    if(video.paused) {// si la vidéo est en pause
        btn.className="pause"; // Le btn a la classe "pause" > change l'icône play en pause
        video.play();
    } 
    else {
        btn.className = "play";
        video.pause();
    }
}

btn.onclick = function(){
    togglePlayPause();
}


// Mouvement de la barre

video.addEventListener('timeupdate', function() {

    let violetPos = video.currentTime / video.duration; // diviser par 
    violet.style.width = violetPos * 100 + '%'; // changer la width en fonction de la durée de la vidéo

    if(video.ended) {
        btn.className = "play";
    }
})

// Mute la vidéo

muteBtn.addEventListener('click', function() {
    if(video.muted){
        video.muted = false;
        muteBtn.innerHTML = "Mute";
    } else {
        video.muted = true;
        muteBtn.innerHTML = "Unmute";
    }
})

// Augmenter / baisser le volume

volumeslider.addEventListener('change', function(){
    video.volume = volumeslider.value / 100;
})


// Rendre cliquable la barre orange (CF: YouTube)

let rect = russianBar.getBoundingClientRect();
console.log(rect);

let largeur = rect.width;

russianBar.addEventListener('click', function(e){

    // la valeur du click sur x par rapport à l'élément > savoir où l'on se trouve sur la barre

    let x = e.clientX - rect.left;
    console.log(x);
    console.log(e.clientX);

    let witdhPercent = ((x*100)/largeur);
    console.log(witdhPercent);

    let currentTimeTrue = (witdhPercent * 19 ) / 100; // 63 = durée totale de la vidéo
    console.log(currentTimeTrue);

    video.currentTime = currentTimeTrue; // tu vas à cet endroit là en secondes

    violet.style.width = widthPercent + '%';
})


//****************ToggleFullScreen*******************//

// function toggleFullScreen(){
//     if(vid.requestFullScreen){
//      vid.requestFullScreen();
//     } else if(vid.webkitRequestFullScreen){
//      vid.webkitRequestFullScreen();
//     } else if(vid.mozRequestFullScreen){
//      vid.mozRequestFullScreen();
//     }
//    }