Hits;
import { Wrapper } from '../styled/Curated';
import bgImg from '../assets/Pexels Photo by Eric Esma.png';
import Hits from './Hits';
const Curated = () => {
  return (
    <Wrapper>
      <Hits />
      <img className="box" src={bgImg} alt="" />
    </Wrapper>
  );
};

export default Curated;
