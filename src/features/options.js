const API_KEY = import.meta.env.VITE_API_KEY;
const url = 'https://spotify81.p.rapidapi.com/playlist';
export const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
};

// get playlist

export const getPlaylistGunna = {
  method: 'GET',
  url: url,
  params: {
    id: '37i9dQZF1DZ06evO1iznkj',
  },
  headers: headers,
};
export const getPlaylistAsake = {
  method: 'GET',
  url: url,
  params: {
    id: '37i9dQZF1DZ06evO1PtbYA',
  },
  headers: headers,
};
export const getPlaylistAvicii = {
  method: 'GET',
  url: url,
  params: {
    id: '37i9dQZF1DZ06evO0PRpBu',
  },
  headers: headers,
};
export const getPlaylistChris = {
  method: 'GET',
  url: url,
  params: {
    id: '37i9dQZF1DZ06evO4fRiko',
  },
  headers: headers,
};
export const getPlaylistDrake = {
  method: 'GET',
  url: url,
  params: {
    id: '37i9dQZF1DX7QOv5kjbU68',
  },
  headers: headers,
};

export const newRelease = {
  method: 'GET',
  url: url,
  params: {
    id: '37i9dQZF1EpzEybb0iKW60',
    offset: '0',
    limit: '100',
  },
  headers: headers,
};

import axios from 'axios';

export const fetchTrack = async (id) => {
  const options = {
    method: 'GET',
    url: 'https://spotify81.p.rapidapi.com/playlist',
    params: {
      id: id,
      offset: '0',
      limit: '100',
    },
    headers,
  };

  try {
    const response = await axios(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// found another API that has all the contents without first getting the playlist then the tracks
//Asake
// export const options = {
//   method: 'GET',
//   url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
//   params: {
//     id: '37i9dQZF1DZ06evO1PtbYA',
//     offset: '0',
//     limit: '100',
//   },
//   headers: headers,
// };

// // Gunna Wunna
// export const options1 = {
//   method: 'GET',
//   url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
//   params: {
//     id: '37i9dQZF1DZ06evO1iznkj',
//     offset: '0',
//     limit: '100',
//   },
//   headers: headers,
// };

// //Avicii
// export const options2 = {
//   method: 'GET',
//   url: 'https://spotify23.p.rapidapi.com/playlist_tracks/',
//   params: {
//     id: '37i9dQZF1DXcXBWjiVEM8R',
//     offset: '0',
//     limit: '100',
//   },
//   headers: headers,
// };
