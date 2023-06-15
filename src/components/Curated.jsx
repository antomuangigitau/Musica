Hits;
import { Wrapper } from '../styled/Curated';
import bgImg from '../assets/Pexels Photo by Eric Esma.png';
import Hits from './Hits';
const Curated = () => {
  return (
    <Wrapper>
      <Hits />
      <div>
        <img src={bgImg} alt="" />
      </div>
    </Wrapper>
  );
};

export default Curated;
