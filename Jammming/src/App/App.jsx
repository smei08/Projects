import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import SearchBar from '../components/SearchBar';
import Tracklist from '../components/Tracklist';
import Track from '../components/Track';
import Playlist from '../components/playlist';
import { AUTH_ENDPOINT } from '../components/SpotifyAuth';

function App() {
  const [searchSong, setSongSearch] = useState('');
  const [searchResults, setSearchResult] = useState([]);
  const [playlist, setPlaylist] = useState([]);
  const [token, setToken] = useState('');

  const handleSongSearch = (e) => {
    setSongSearch(e.target.value);
  };

  const handleSearchSubmit = async() => {
    if (!token || !searchSong) return;

    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${encodeURIComponent(searchSong)}&type=track&limit=10`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      const tracks = data.tracks.items.map((track) => ({
        id: track.id,
        title: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
      }));

      setSearchResult(tracks);
    } catch(error) {
      console.log(`Error fetching song search from Spotify: `, error);
    }
    console.log('Searching for: ', searchSong);
  };

  const handleSetSearchResult = () => {
    setSearchResult(Response.data.tracks.items);
  }

  const addToPlaylist = (song) => {
    setPlaylist((prev) => {
      if(!prev.find((result) => result.id === song.id)) {
        return [...prev, song];
      }
      return prev;
    });
  };

  const removeFromPlaylist = (song) => {
    setPlaylist((prev) => prev.filter((result) => result.id !== song.id));
  };

  const exportPlaylist = () => {
    console.log('Exporting playlist!', playlist);
  };

  useEffect (() => {
    const hash = window.location.hash;
    let storedToken = window.localStorage.getItem('spotify_token');

    if (!storedToken && hash) {
      const tokenMatch = hash.match(/access_token=([^&]*)/);
      const newToken = tokenMatch && tokenMatch[1] 

      if (newToken) {
        window.localStorage.setItem('spotify_token', newToken);
        setToken(newToken);
        window.location.hash = '';
      }
    } else if (storedToken) {
      setToken(storedToken);
    }
  }),[]

  return (
    <>
      <h1>My Spotify Playlist APP</h1>
      <div className='App'>
        
        <SearchBar 
          searchSong={searchSong}
          searchUpdate={handleSongSearch}
          handleSearchSubmit={handleSearchSubmit}
        />
        <Tracklist 
          searchResults={searchResults}
          addToPlaylist={addToPlaylist}
        />
        <Playlist 
          playlist={playlist}
          removeFromPlaylist={removeFromPlaylist}
          exportPlaylist={exportPlaylist}
        />
      </div>
      <div>
        <a href={ AUTH_ENDPOINT }>
          <button>Log in with Spotify</button>
        </a>
      </div> 
    </>
  )
};

export default App;
