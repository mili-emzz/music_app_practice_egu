export default {
    _img: HTMLElement,
    _title: HTMLElement,
    _artist: HTMLElement,
    Interface(imgElement, titleElement, artistElement){
        this._img = imgElement;
        this._title = titleElement,
        this._artist = artistElement;
    },
    loadSong(song){
        this._img.src = song.caratula;
        this._title.innerText = song.song_name;
        this._artist.innerText = song.artist_name;
    }
}