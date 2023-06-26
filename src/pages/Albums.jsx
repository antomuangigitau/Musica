import { PlayerLayout } from '../components';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchTrack } from '../features/options';
import Description from '../components/Description';
import Loading from '../components/Loading';
import SongList from '../components/SongList';
const Albums = () => {
  const { id } = useParams();

  const {
    data: playlist,
    isLoading,
    isError,
  } = useQuery(['single'], async () => {
    const newTrack = await fetchTrack(id);
    return newTrack;
  });
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error occurred while fetching playlists.</p>;
  }
  return (
    <PlayerLayout>
      <Description playlists={playlist} />
      <SongList playlists={playlist} />
    </PlayerLayout>
  );
};
export default Albums;
