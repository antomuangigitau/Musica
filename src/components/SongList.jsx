import { useState } from 'react';
import { Wrapper } from '../styled/SongList';
import { Heart, MoreVertical } from '../svgFiles';
import { setActiveSong, setActiveSongs } from '../features/apiSlice';
import { useDispatch } from 'react-redux';

const SongList = (playlists) => {
  const dispatch = useDispatch();
  const { playlists: list } = playlists;
  const { items } = list.tracks;

  // const [activeIndex, setIsActiveIndex] = useState('');
  // const [active, setActive] = useState(false);
  // const active = true;
  // const handleClick = (index) => {
  //   setIsActiveIndex((prevIndex) => (prevIndex === index ? '' : index));
  // };
  const handlePlay = (activeSong) => {
    const track = items.map((item) => item.track);
    dispatch(setActiveSong(activeSong || track[0]));
    dispatch(setActiveSongs(track));
  };
  const [activeIndexes, setActiveIndexes] = useState([]);
  const [numToShow, setNumToShow] = useState(10);
  const numToAdd = 10;

  const handleClick = (index) => {
    if (activeIndexes.includes(index)) {
      // If the button is already active, remove it from the activeIndexes array
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      // If the button is not active, add it to the activeIndexes array
      setActiveIndexes([...activeIndexes, index]);
    }
  };
  const handleShowMore = () => {
    setNumToShow(numToShow + numToAdd);
  };
  return (
    <Wrapper>
      {items.slice(0, numToShow).map((item, index) => {
        const { track } = item;
        const {
          album: { album_type, images, name: song_name },
          artists,
          duration_ms,
          name,
        } = track;
        const totalDurationSeconds = Math.floor(duration_ms / 1000);
        const minutes = Math.floor(totalDurationSeconds / 60);
        const seconds = totalDurationSeconds % 60;
        const formattedDuration = `${minutes}:${seconds
          .toString()
          .padStart(2, '0')}`;
        return (
          <div
            className="container"
            key={index}
            onClick={() => handlePlay(track)}
          >
            <div className="image__container">
              <img src={images[2].url} alt={song_name} />
              <Heart
                className={activeIndexes.includes(index) ? 'active' : ''}
                onClick={(e) => {
                  e.stopPropagation();
                  handleClick(index);
                }}
              />
            </div>
            <div className="artist__details">
              <div>
                <span>
                  {`${name.substring(0, 25)} ...`} ~ {artists[0].name}
                </span>
              </div>
              <span>{album_type}</span>
              <span>{formattedDuration}</span>
              <MoreVertical
                onClick={(e) => {
                  e.stopPropagation();
                }}
              />
            </div>
          </div>
        );
      })}
      {numToShow < items.length && (
        <div className="flex__center">
          <button className="btn" onClick={handleShowMore}>
            Load more
          </button>
        </div>
      )}
    </Wrapper>
  );
};
export default SongList;
