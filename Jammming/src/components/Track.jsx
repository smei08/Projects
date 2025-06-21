import React from 'react';

function Track({song, addToPlaylist} ) {

    return (
        <div className='songContainer'>
            <div className='songInfo'>
                <h4>{song.title}</h4>
                <p>{song.artist} -- {song.ablum}</p>
            </div>
            <button onClick={() => addToPlaylist(song)}>ADD</button>
        </div>
    );
}

export default Track;