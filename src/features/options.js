const API_KEY = import.meta.env.VITE_API_KEY;
export const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
};

//Asake
export const options = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
  params: {
    id: '37i9dQZF1DZ06evO1PtbYA',
    offset: '0',
    limit: '100',
  },
  headers: headers,
};

// Gunna Wunna
export const options1 = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
  params: {
    id: '37i9dQZF1DZ06evO1iznkj',
    offset: '0',
    limit: '100',
  },
  headers: headers,
};

//Avicii
export const options2 = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
  params: {
    id: '37i9dQZF1DXcXBWjiVEM8R',
    offset: '0',
    limit: '100',
  },
  headers: headers,
};

// get playlist

export const getPlaylistGunna = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist/',
  params: {
    id: '37i9dQZF1DZ06evO1iznkj',
  },
  headers: headers,
};
export const getPlaylistAsake = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist/',
  params: {
    id: '37i9dQZF1DZ06evO1PtbYA',
  },
  headers: headers,
};
export const getPlaylistAvicii = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist/',
  params: {
    id: '37i9dQZF1DZ06evO0PRpBu',
  },
  headers: headers,
};
export const getPlaylistChris = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist/',
  params: {
    id: '37i9dQZF1DZ06evO4fRiko',
  },
  headers: headers,
};
export const getPlaylistDrake = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist/',
  params: {
    id: '37i9dQZF1DX7QOv5kjbU68',
  },
  headers: headers,
};

export const newRelease = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
  params: {
    id: '37i9dQZF1EpzEybb0iKW60',
    offset: '0',
    limit: '100',
  },
  headers: headers,
};
