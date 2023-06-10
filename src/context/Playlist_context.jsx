/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import React, { useContext, useReducer, useEffect } from 'react';

import axios from 'axios';
import reducer from './playlist_reducer';
import { GET_PLAYLIST_BEGIN, GET_PLAYLIST_SUCCESS } from './action';
import {
  getPlaylistThugga,
  getPlaylistAsake,
  getPlaylistAvicii,
} from './options';
import { useQuery } from '@tanstack/react-query';
const initialState = {
  playlists: [],
  songs_track: [],
};

const PlaylistContext = React.createContext();

export const PlaylistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchPlaylist = async (url) => {
    dispatch({ type: GET_PLAYLIST_BEGIN });
    try {
      const response = await axios(url);
      const playlist = response?.data;
      dispatch({ type: GET_PLAYLIST_SUCCESS, payload: playlist });
    } catch (error) {
      console.error(error);
    }
  };
  const playlist1Query = useQuery(['playlist1'], () =>
    fetchPlaylist(getPlaylistAsake)
  );
  const playlist2Query = useQuery(['playlist2'], () =>
    fetchPlaylist(getPlaylistAvicii)
  );

  const playlist3Query = useQuery(['playlist3'], () =>
    fetchPlaylist(getPlaylistThugga)
  );
  return (
    <PlaylistContext.Provider value={{ ...state }}>
      {children}
    </PlaylistContext.Provider>
  );
};
// make sure use
export const usePlaylistContext = () => {
  return useContext(PlaylistContext);
};

// const fetchTracks = async (url) => {
//     dispatch({ type: 'GET_PRODUCTS_BEGIN' });
//     try {
//       const response = await axios.request(url);
//     //   console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };
