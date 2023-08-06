/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlists: [],
  newPlaylist: [],
  isOpen: false,
  activeSongs: [],
  activeSong: null,
  text: '',
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },
    setNewPlaylist: (state, action) => {
      state.newPlaylist = action.payload;
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
    setText: (state, { payload }) => {
      state.text = payload;
    },
    setAddPlaylist: (state, { payload }) => {
      state.playlists = state.playlists.push(payload);
    },
  },
});

// console.log(playlistSlice);
export const {
  setPlaylists,
  setNewPlaylist,
  setIsClose,
  setIsOpen,
  setActiveSong,
  setActiveSongs,
  setText,
  setAddPlaylist,
} = playlistSlice.actions;
export default playlistSlice.reducer;
