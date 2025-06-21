import React from 'react';

function SearchBar({searchSong, searchUpdate, handlesearchSubmit}) {
    console.log('search bar loading...');

    const handleSubmit = (e) => {
        e.preventDefault();
        handlesearchSubmit();
    }

    return (
       <div className='SearchBar'>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                id='songSearch'
                value={searchSong}
                onChange={searchUpdate}
            ></input>
            <button type='submit'>Search</button>
        </form>
        <p>searchbar is working...</p>
       </div>
    );
}

export default SearchBar;