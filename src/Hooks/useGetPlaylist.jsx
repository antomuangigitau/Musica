import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
// console.log(API_KEY);
const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': 'spotify81.p.rapidapi.com',
};

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
