import React from "react";
import Track from "./Track";

function Tracklist({searchResults, addToPlaylist}) {
    console.log('tracklist loading...,', searchResults)
    return (
        <div className="tracklist">
            {searchResults.map((song) => (
                    <Track 
                        key={song.id}
                        song={song}
                        addToPlaylist={addToPlaylist}
                    />
            ))}
            <div>
                <h2>Tracklist is working!</h2>
                <p>Number of results: {searchResults.length}</p>
            </div>
        </div>
    );
}

export default Tracklist;