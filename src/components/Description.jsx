import { useState } from 'react';
import { Wrapped } from '../styled/Description';
import { Heart, MusicSquare, Play } from '../svgFiles';
import Button from '../utils/Button';
const Description = (playlists) => {
  const { playlists: list } = playlists;
  const { description, name, images, tracks } = list;
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const { items } = tracks;
  const totalDurationMs = items.reduce((acc, listitems) => {
    const { duration_ms } = listitems.track;
    acc += duration_ms;
    return acc;
  }, 0);
  const hours = Math.floor(totalDurationMs / (1000 * 60 * 60));
  const minutes = Math.floor(
    (totalDurationMs % (1000 * 60 * 60)) / (1000 * 60)
  );
  return (
    <Wrapped>
      <div className="container">
        <img src={images[0].url} alt={name} />
      </div>
      <article className="article">
        <h3>{name}</h3>
        <article>
          <p>{description}</p>
          <span>
            {tracks.items.length} songs - {hours}h {minutes}min
          </span>
        </article>
        <div>
          <Button>
            <Play />
            <span>Play all</span>
          </Button>
          <Button>
            <MusicSquare />
            <span>Add to collection</span>
          </Button>
          <span className="heart">
            <Heart className={active ? 'active' : ''} onClick={handleClick} />
          </span>
        </div>
      </article>
    </Wrapped>
  );
};

export default Description;
