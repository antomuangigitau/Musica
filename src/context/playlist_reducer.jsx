import { GET_PLAYLIST_BEGIN, GET_PLAYLIST_SUCCESS } from './action';
const reducer = (state, action) => {
  if (action.type === GET_PLAYLIST_BEGIN) {
    return { ...state, loading: true };
  }
  if (action.type === GET_PLAYLIST_SUCCESS) {
    return {
      ...state,
      playlists: [action.payload],
      loading: false,
    };
  }
  return state;
};

export default reducer;
