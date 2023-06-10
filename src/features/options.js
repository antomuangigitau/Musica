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
    id: '37i9dQZF1DXcXBWjiVEM8R',
  },
  headers: headers,
};

export const newRelease = {
  method: 'GET',
  url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
  params: {
    id: '6fdmCesA42gM8jIHTBPwfH',
    offset: '0',
    limit: '100',
  },
  headers: headers,
};
