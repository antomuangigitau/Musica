import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import {
  getPlaylistAsake,
  getPlaylistAvicii,
  getPlaylistGunna,
  getPlaylistChris,
  getPlaylistDrake,
} from '../features/options';

import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPlaylists } from '../features/apiSlice';
import { useState, useEffect } from 'react';
import { Wrapper } from '../styled/Charts';
import { Heart } from '../svgFiles';
import Loading from './Loading';

const Charts = () => {
  const [activeIndexes, setActiveIndexes] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth); // Track screen width

  const handleClick = (index) => {
    if (activeIndexes.includes(index)) {
      setActiveIndexes(activeIndexes.filter((item) => item !== index));
    } else {
      setActiveIndexes([...activeIndexes, index]);
    }
  };

  const dispatch = useDispatch();

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
  } = useQuery(
    ['playlist1,playlist2,playlist3'],
    async () => {
      const playlist1 = await fetchPlaylist(getPlaylistAsake);
      const playlist2 = await fetchPlaylist(getPlaylistAvicii);
      const playlist3 = await fetchPlaylist(getPlaylistGunna);
      const playlist4 = await fetchPlaylist(getPlaylistChris);
      const playlist5 = await fetchPlaylist(getPlaylistDrake);
      const allPlaylists = [
        playlist1,
        playlist2,
        playlist3,
        playlist4,
        playlist5,
      ];
      dispatch(setPlaylists(allPlaylists));
      return allPlaylists;
    },
    {
      cacheTime: Infinity,
    }
  );

  useEffect(() => {
    // Update screen width on window resize
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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

  const shouldDisplayAllContainers = screenWidth < 64 * 16; // 64rem * 16px (assuming 1rem = 16px)

  return (
    <Wrapper>
      <h4 className="header">Top charts</h4>
      <div className="outer first__div">
        {playlists && playlists.length > 0 ? (
          playlists?.map((playlist, index) => {
            if (!playlist) {
              return null;
            }
            const { name, images, uri } = playlist;
            const playlistID = uri?.slice(8).replace(/:/g, '/');
            const showContainer = shouldDisplayAllContainers || index < 3; // Display only three containers when screenWidth >= 64rem
            return (
              showContainer && (
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
              )
            );
          })
        ) : (
          <p>No playlists available.</p>
        )}
      </div>
    </Wrapper>
  );
};

export default Charts;
