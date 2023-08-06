/* eslint-disable react/no-unescaped-entities */
import { useDispatch, useSelector } from 'react-redux';
import { setActiveSong, setActiveSongs } from '../features/apiSlice';
import { Wrapper } from '../styled/SearchPage';
const SearchPage = () => {
  const dispatch = useDispatch();
  const { playlists, text } = useSelector((state) => state.playlist);
  const items = playlists?.map((item) => {
    return item.tracks;
  });
  const list = items
    .map((item) => {
      return item.items;
    })
    .flat();

  const lists = list.map((item) => {
    return item.track;
  });
  // console.log(lists);
  const trackList = lists.filter((item) =>
    item.name.toLowerCase().includes(text.toLowerCase())
  );
  // console.log(trackList);
  const handlePlay = (activeSong) => {
    console.log(activeSong);
    dispatch(setActiveSong(activeSong || lists[0]));
    dispatch(setActiveSongs(lists));
  };
  if (!text) {
    return (
      <Wrapper>
        <h5>search your favorite music</h5>;
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="center">
        {trackList && trackList.length > 0 ? (
          trackList.map((track, index) => {
            const {
              album: { artists, images },
              name,
            } = track;
            return (
              <div
                onClick={() => handlePlay(track)}
                className="third__div"
                key={index}
              >
                <div>
                  <img src={images[1].url} alt={artists[0].name} />
                </div>
                <h4>{name}</h4>
                <h5>{artists[0].name}</h5>
              </div>
            );
          })
        ) : (
          <div>
            <h3>Couldn't find '{text}'</h3>
            <p>Try searching again using a different spelling or keyword</p>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default SearchPage;
