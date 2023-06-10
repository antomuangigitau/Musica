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
  grid-template-columns: repeat(2, 1fr);
  gap: 22px;
  margin-bottom: 43px;
`;
export default PlayList;
