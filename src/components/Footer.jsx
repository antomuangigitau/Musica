import { Wrapper } from '../styled/Footer';
import Player from './Player';

const Footer = () => {
  return (
    <Wrapper className="p-x">
      <div className="container m-x">
        {/* first div  */}
        <div className="first">
          <img src="" alt="" />
          <div>
            <h4>Song Name</h4>
            <h5>Artist Name</h5>
          </div>
        </div>
        {/* second div  */}
        <Player />
        {/* third */}
        <div className="third"></div>
      </div>
    </Wrapper>
  );
};

export default Footer;
