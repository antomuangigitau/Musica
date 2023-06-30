import { useQuery } from '@tanstack/react-query';
import { newRelease } from '../features/options';
import axios from 'axios';
import Loading from './Loading';
import { Wrapper } from '../styled/NewRelease';
import { useDispatch } from 'react-redux';
import {
  setActiveSong,
  setActiveSongs,
  setNewPlaylist,
} from '../features/apiSlice';
const NewReleases = () => {
  const dispatch = useDispatch();
  const fetchTrack = async (url) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const {
    data: playlist,
    isLoading,
    isError,
  } = useQuery(['tracks'], async () => {
    const newMusic = await fetchTrack(newRelease);
    dispatch(setNewPlaylist(newMusic));
    return newMusic;
  });
  const handlePlay = (activeSong) => {
    const { items } = playlist.tracks;
    const track = items.map((item) => item.track);
    dispatch(setActiveSong(activeSong || track[0]));
    dispatch(setActiveSongs(track));
  };

  const music = [
    {
      title: 'New releases.',
      tracks: playlist?.tracks.items.slice(0, 11),
    },
    {
      title: 'Popular.',
      tracks: playlist?.tracks.items.slice(11, 21),
    },
    {
      title: 'Recently Played.',
      tracks: playlist?.tracks.items.slice(21, 30),
    },
  ];

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <p>Error occurred while fetching playlists.</p>;
  }
  return (
    <Wrapper>
      {music.map((trackList, index) => {
        const { title, tracks } = trackList;
        return (
          <div className="first__div" key={index}>
            <h2>{title}</h2>
            <div className="second__div">
              {tracks && tracks.length > 0 ? (
                tracks.map((trackList, index) => {
                  const { track } = trackList;
                  const {
                    album: { artists, images },
                    name,
                    //   preview_url: url,
                  } = track;
                  //   console.log(artists, images, name, url);
                  return (
                    <div
                      onClick={() => handlePlay(track)}
                      className="third__div"
                      key={index}
                    >
                      <div>
                        <img src={images[1].url} alt={artists[0].name} />
                      </div>
                      <h4>{name}</h4>
                      <h5>{artists[0].name}</h5>
                      {/* <audio controls src={url}></audio> */}
                    </div>
                  );
                })
              ) : (
                <p>No tracks available.</p>
              )}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};
export default NewReleases;
