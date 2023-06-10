/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-undef */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playlists: [],
};

const playlistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setPlaylists: (state, action) => {
      state.playlists = action.payload;
    },
  },
});

// console.log(playlistSlice);
export const { setPlaylists } = playlistSlice.actions;
export default playlistSlice.reducer;
