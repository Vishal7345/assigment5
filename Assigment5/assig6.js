//create playlist 

function createPlaylist(playlistName) {
    let playlist = [];

    return {
        addSong: function(songName, artist) {
            playlist.push({ songName, artist });
        },

        listSongs: function() {
            if (playlist.length === 0) {
                console.log(`${playlistName} playlist is empty.`);
            } else {
                console.log(`${playlistName} playlist: ${playlist.map(song => `${song.songName} by ${song.artist}`).join(', ')}`);
            }
        }
    };
}

// Add song to playlist
function addSong(playlist, songName, artist) {
    playlist.addSong(songName, artist);
}

// List songs in playlist
function listSongs(playlist) {
    playlist.listSongs();
}

const myPlaylist = createPlaylist('My Favorites');

addSong(myPlaylist, 'song1', 'Artist1');
addSong(myPlaylist, 'song2', 'Artist2');
addSong(myPlaylist, 'song3', 'Artist3');

listSongs(myPlaylist);
