import React from 'react';

function SearchBar({searchSong, searchUpdate, handleSearchSubmit}) {
    console.log('search bar loading...');

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearchSubmit();
    }

    return (
       <div className='SearchBar'>
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                value={searchSong}
                onChange={searchUpdate}
                placeholder='Search songs or artists'
            ></input>
            <button type='submit' onClick={handleSearchSubmit}>Search</button>
        </form>
        <p>searchbar is working...</p>
       </div>
    );
}

export default SearchBar;