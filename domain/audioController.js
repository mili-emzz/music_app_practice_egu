export default{ // apuntador y pilas
    AudioController(playlist){
        this._nextSong = playlist;
        this._actualSong = this._nextSong.pop();
        this._controller = audioHTMLElement
    },
    _nextSong: [],
    _lastSong: [],
    _actualSong: null,
    _controller: document.getElementById("media"),
    // pilas
    nextSong(){ // esto es como una clase
        if(this._nextSong.lenght !== 0){
            this._lastSong.push(this._actualSong);
            this._actualSong = this._nextSong.pop();
        }
    },
    loadSong(){
        this._controller.src = this._actualSong.song.url // parametro con el que va a cargar la canción
    },
    prevSong(){
        if(this._lastSong.length !== 0){
            this._nextSong.push(this._actualSong);
            this._actualSong = this._lastSong.pop();
        }
    },    
    playPause(action){
        if(action === 'play'){
            this._controller.play();
        } else {
            this._controller.pause();  
        }
    }
}

