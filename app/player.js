import audioController from "../domain/audioController";
import createPlaylist from "../utils/playlist";

export default{ // clase con lo que controla el reproductor
    _progress_bar: document.getElementById("progress"),
    _play_btn:  document.getElementById("play"),
    _lastest: document.getElementById("lastest"),
    _forward:  document.getElementById("forward"),
    _audioController: audioController,

    player(){
        this._progress_bar.max = 100;
        this._progress_bar.value = 0
        const media_controller = document.getElementById("media");
        this._audioController.AudioController(null, media_controller);
        const playlist = createPlaylist(songs, null);

        this._interface.Interface(
            document.getElementById('song-img'),
            document.getElementById('title'),
            document.getElementById('artist')
        );

        this._interface.loadSong(this._audioController._actualSong);
    },

    eventListeners(){
        this._audioController._controller.addEventListener('timeupdate', function(){
            progress_value = (player._audioController.currentTime / player._audioController.duration) * 100;
            player._progress_bar.value = progress_value;
        });
        this._progress_bar.addEventListener('input', function(){
            player._audioController._controller.currentTime = (this.value/100) * player._audioController._controller.duration;
        });
        this._forward.addEventListener('click', function(){
            audioController.nextSong();
            player._interface.loadSong();

        })
        this._lastest.addEventListener('click', function(){
            audioController.prevSong();
        })
        this._play_btn.addEventListener('click', function(event){ // se le pasa ya player
                player.AudioController.playPause(event, EventTarget, classList[0]);
        })
        this._audioController.addEventListener('click', function(event){
            player._progress_bar.value = 0;
        })
    }
}