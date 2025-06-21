const clientID = 'f9421397d4db4d02b5c7041c0b49f247';
const redirectURL = 'https://hilarious-mochi-2c7322.netlify.app/';
const scope = "playlist-modify-public playlist-modify-private user-read-private";

const base= 'https://accounts.spotify.com/authorize';
const encodedRedirect = encodeURIComponent(redirectURL);
const encodedScope = encodeURIComponent(scope);


const AUTH_ENDPOINT = `${base}?client_id=${clientID}&response_type=token&redirect_uri=${encodedRedirect}&scope=${encodedScope}`;