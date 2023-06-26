import { styled } from 'styled-components';
import { PlayerLayout } from '../components';
import NewReleases from '../components/NewReleases';
import PlayList from '../components/PlayList';
const Home = () => {
  return (
    <PlayerLayout>
      <Wrapper>
        <PlayList />
        <NewReleases />
      </Wrapper>
    </PlayerLayout>
  );
};

const Wrapper = styled.section`
  margin-left: 0;
  margin-bottom: 120px;
  @media (min-width: 64rem) {
    margin-left: 29px;
  }
`;
export default Home;
