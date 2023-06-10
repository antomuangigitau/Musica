import { configureStore } from '@reduxjs/toolkit';

import playlistReducer from './features/apiSlice';
export const store = configureStore({
  reducer: {
    playlist: playlistReducer,
  },
});
