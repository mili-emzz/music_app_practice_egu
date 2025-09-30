import createPlaylist from "./utils/playlist.js";

let progress_bar = document.getElementById("progress");
let media = document.getElementById("media");
let play_btn = document.getElementById("play");
const song_img = document.getElementById("song-img");
const lastest = document.getElementById("lastest");
const forward = document.getElementById("forward")

const songs = [
    ];

const last = [];

const playlist = createPlaylist(songs.length);

let playingNow;

window.addEventListener('DOMContentLoaded', () => {
    playingNow = playlist.pop()
    loadSong(playingNow);
})

function loadSong(i){
    const title = document.getElementById("title");
    const artist = document.getElementById("artist");

    const now = songs[i];
  
    media.src = now.song_url;
    title.innerText = now.song_name;
    artist.innerText = now.artist_name;
    song_img.src = now.caratula;
}

media.addEventListener('loadedmetadata', () => { //agarrar el onclick, poder hacer cuantas funciones quiera
    progress_bar.max = 100;
    progress_bar.value = 0;
    if(play_btn.classList.contains("pause")){
        media.play();
    }
});

media.ontimeupdate = function updateProgressBar() { // esto es un atributo, si se quierer hacer dos funciones al mismo tiempo se va a superponer y ya no se hará nada xd
    const progress_value = (this.currentTime / this.duration) * 100;
    progress_bar.value = progress_value;
}

lastest.addEventListener('click', function(){
    if(!last.length == 0){
        playlist.push(playingNow);
        playingNow = last.pop();
        loadSong(playingNow)
    }
});
forward.addEventListener('click', function(){
    if(!playlist.length == 0){
        last.push(playingNow);
        playingNow = playlist.pop(); //ver el ultimo elemento y la va a cargar
        loadSong(playingNow)
    }
});

progress_bar.oninput = function() {
    media.currentTime = (this.value/100) * media.duration;
}
    
play_btn.addEventListener("click", playPause);
play_btn

function playPause(){
    if(play_btn.classList.contains("pause")){
        media.pause();
        play_btn.classList.remove("pause");
        play_btn.classList.add("play");
        play_btn.innerText = "Play"
    }else{
        media.play();
        play_btn.classList.remove("play");
        play_btn.classList.add("pause");
        play_btn.innerText = "Pause";
    }
}