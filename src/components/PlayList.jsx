import styled from 'styled-components';
import Curated from './Curated';
import Charts from './Charts';
const PlayList = () => {
  return (
    <Wrapper>
      <Curated />
      <Charts />
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 47px;
  max-width: 100%;
  @media (min-width: 64rem) {
    margin-bottom: 43px;
    grid-template-columns: 2fr 1fr;
    gap: 24px;
  }
`;
export default PlayList;
