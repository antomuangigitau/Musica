import { useSelector } from 'react-redux';
import { Wrapper } from '../styled/Footer';
import Player from './Player';

const Footer = () => {
  const { activeSong, activeSongs } = useSelector((state) => state.playlist);
  const { name, album: { images = [], artists = [] } = {} } = activeSong || {};
  return (
    <Wrapper className="p-x">
      <div className="container m-x">
        {/* first div  */}
        {activeSong ? (
          <div className="first">
            <img src={images[2].url} alt={name} />
            <div>
              <h4>{name.substring(0, 10)}...</h4>
              <h5>
                {artists.length > 1
                  ? `${artists[0].name} ft ${artists[1].name}`
                  : artists[0].name}
              </h5>
            </div>
          </div>
        ) : null}
        {/* second div  */}
        {activeSong ? (
          <Player activeSong={activeSong} activeSongs={activeSongs} />
        ) : null}
        {/* third */}
        {activeSong ? (
          <div className="third">
            <h5>volume</h5>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
};

export default Footer;
