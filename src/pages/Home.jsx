import { PlayerLayout } from '../components';
import NewReleases from '../components/NewReleases';
import PlayList from '../components/PlayList';
const Home = () => {
  return (
    <PlayerLayout>
      <PlayList />
      <NewReleases />
    </PlayerLayout>
  );
};

export default Home;
