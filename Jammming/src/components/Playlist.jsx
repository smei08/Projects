import React from "react";

function Playlist({playlist, removeFromPlaylist, exportPlaylist}) {
    return (
        <div className="playlist">
            <h3>Your Playlist</h3>
            {playlist.map(song => {
                <div key={song.id} className="playlistSong">
                    <Track 
                        key={song.id}
                        song={song}
                     />
                    <button onClick={() => removeFromPlaylist(song)}>Remove</button>
                </div>
                }
            )}
            <button onClick={exportPlaylist}>Export to Spotify</button>
        </div>
    );
}

export default Playlist;