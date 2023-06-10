import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  getPlaylistAsake,
  getPlaylistAvicii,
  getPlaylistGunna,
} from '../features/options';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPlaylists } from '../features/apiSlice';
import { useState } from 'react';
import { Wrapper } from '../styled/Charts';
import { Heart } from '../svgFiles';
import Loading from './Loading';
const Charts = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const handleClick = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };
  const dispatch = useDispatch();
  // const data = useSelector((state) => state.playlist);
  // console.log('data', data);
  // const { playlists } = data;
  const fetchPlaylist = async (url) => {
    try {
      const response = await axios(url);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  const {
    data: playlists,
    isLoading,
    isError,
  } = useQuery(['playlist1,playlist2,playlist3'], async () => {
    const playlist1 = await fetchPlaylist(getPlaylistAsake);
    const playlist2 = await fetchPlaylist(getPlaylistAvicii);
    const playlist3 = await fetchPlaylist(getPlaylistGunna);
    const allPlaylists = [playlist1, playlist2, playlist3];
    dispatch(setPlaylists(allPlaylists));
    return allPlaylists;
  });
  // console.log('playlists', playlists);

  if (isLoading) {
    return (
      <Wrapper>
        <h4 className="header">Top charts</h4>
        <Loading />
      </Wrapper>
    );
  }

  if (isError) {
    return <p>Error occurred while fetching playlists.</p>;
  }
  return (
    <Wrapper>
      <h4 className="header">Top charts</h4>
      {playlists && playlists.length > 0 ? (
        playlists?.map((playlist, index) => {
          if (!playlist) {
            return null;
          }
          const { name, images, uri } = playlist;
          const playlistID = uri?.slice(8).replace(/:/g, '/');
          return (
            <div className="container" key={index}>
              <Link to={`/${playlistID}`}>
                <img src={images[0].url} alt={name} />
                <div>
                  <h4>{name}</h4>
                  <h5>{name?.slice(8)}</h5>
                </div>
              </Link>
              <span className="heart">
                <Heart
                  className={activeIndexes.includes(index) ? 'active' : ''}
                  onClick={() => handleClick(index)}
                />
              </span>
            </div>
          );
        })
      ) : (
        <p>No playlists available.</p>
      )}
    </Wrapper>
  );
};
export default Charts;

// "spotify:playlist:37i9dQZF1DZ06evO1PtbYA"
// useEffect(() => {
//   dispatch(setPlaylists(playlist));
// }, [dispatch, playlist]);
