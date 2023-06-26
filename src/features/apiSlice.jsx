/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlists: [],
  isOpen: false,
  activeSongs: [],
  activeSong: null,
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },
    setIsOpen: (state) => {
      state.isOpen = true;
    },
    setIsClose: (state) => {
      state.isOpen = false;
    },
    setActiveSongs: (state, { payload }) => {
      state.activeSongs = payload;
    },
    setActiveSong: (state, { payload }) => {
      state.activeSong = payload;
    },
  },
});

// console.log(playlistSlice);
export const {
  setPlaylists,
  setIsClose,
  setIsOpen,
  setActiveSong,
  setActiveSongs,
} = playlistSlice.actions;
export default playlistSlice.reducer;
