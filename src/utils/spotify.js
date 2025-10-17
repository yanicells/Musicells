const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;

let token = "";

export const getToken = async () => {
  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
    },
    body: "grant_type=client_credentials",
  });
  const data = await response.json();
  token = data.access_token;
  return token;
};

export const searchArtists = async (query) => {
  if (!token) await getToken();
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=artist`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return await response.json();
};

export const searchNewAlbums = async () => {
  if (!token) await getToken();
  const response = await fetch(
    `https://api.spotify.com/v1/browse/new-releases`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return await response.json();
};

export const searchAlbums = async (query) => {
  if (!token) await getToken();
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=album`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return await response.json();
};

export const searchTracks = async (query) => {
  if (!token) await getToken();
  const response = await fetch(
    `https://api.spotify.com/v1/search?q=${query}&type=track`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return await response.json();
};

export const getAlbumDetails = async (albumId) => {
  if (!token) await getToken();
  const response = await fetch(
    `https://api.spotify.com/v1/albums/${albumId}`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return await response.json();
};
