import { useState } from 'react';
import { Wrapper } from '../styled/SongList';
import { Heart, MoreVertical } from '../svgFiles';
const SongList = (playlists) => {
  const { playlists: list } = playlists;
  const { items } = list.tracks;
  // const [activeIndex, setIsActiveIndex] = useState('');
  // const [active, setActive] = useState(false);
  // const active = true;
  // const handleClick = (index) => {
  //   setIsActiveIndex((prevIndex) => (prevIndex === index ? '' : index));
  // };
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleClick = (index) => {
    if (activeIndexes.includes(index)) {
      // If the button is already active, remove it from the activeIndexes array
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      // If the button is not active, add it to the activeIndexes array
      setActiveIndexes([...activeIndexes, index]);
    }
  };
  return (
    <Wrapper>
      {items.map((item, index) => {
        const {
          track: {
            album: { album_type, images, name: song_name },
            artists,
            duration_ms,
            name,
          },
        } = item;
        const totalDurationSeconds = Math.floor(duration_ms / 1000);
        const minutes = Math.floor(totalDurationSeconds / 60);
        const seconds = totalDurationSeconds % 60;
        const formattedDuration = `${minutes}:${seconds
          .toString()
          .padStart(2, '0')}`;
        return (
          <div className="container" key={index}>
            <div className="image__container">
              <img src={images[2].url} alt={song_name} />
              <Heart
                className={activeIndexes.includes(index) ? 'active' : ''}
                onClick={() => handleClick(index)}
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
              <MoreVertical />
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};
export default SongList;
