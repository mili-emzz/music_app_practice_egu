import getRandom from "./utils.js"

export default function createPlaylist(songs, playlist){

    let playlist = [];

    if(playlist !== null){
        playlist = actual_playlist;
    }

    if(songs.length !== 0){

        let index_song = getRandom(songs.length);

        playlist.push(songs[index_song]);
        playlist.splice(song[index_song,1]); //Elimina de la lista apartir de tal posicion comienza a borra una vez. Jala y borra
        return createPlaylist(songs, playlist);
    }

    return playlist;
}