/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from 'react';
import { Wrapper } from '../styled/Player';
import { Next, PlayBar, Previous, Repeat, Shuffle } from '../svgFiles';
import { MdOutlinePauseCircleFilled } from 'react-icons/md';
// import { useSelector } from 'react-redux';
import ReactHowler from 'react-howler';
import { useDispatch } from 'react-redux';
import { setActiveSong } from '../features/apiSlice';

const Player = ({ activeSongs, activeSong }) => {
  // const newIndex = activeSongs.findIndex(
  //   (active) => active.id === activeSong.id
  // );
  const dispatch = useDispatch();
  const [playing, setIsPlaying] = useState(true);
  const [index, setIsIndex] = useState(0);
  const [seek, setSeek] = useState(0.0);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setIsShuffle] = useState(false);
  const [duration, setDuration] = useState(0.0);
  const soundRef = useRef(null);
  const setPlayState = (value) => {
    setIsPlaying(value);
  };
  const onShuffle = () => {
    setIsShuffle((state) => !state);
  };
  const onRepeat = () => {
    setRepeat((state) => !state);
  };
  const prevSong = () => {
    setIsIndex((state) => {
      const newIndex = state === 0 ? activeSongs.length - 1 : state - 1;
      dispatch(setActiveSong(activeSongs[newIndex]));
      return newIndex;
    });
  };
  const nextSong = () => {
    setIsIndex((state) => {
      if (shuffle) {
        let newIndex = Math.floor(Math.random() * activeSongs.length);
        while (newIndex === state) {
          newIndex = Math.floor(Math.random() * activeSongs.length);
        }
        dispatch(setActiveSong(activeSongs[newIndex]));
        return newIndex;
      } else {
        const newIndex = state === activeSongs.length - 1 ? 0 : state + 1;
        dispatch(setActiveSong(activeSongs[newIndex]));
        return newIndex;
      }
    });
  };

  const onEnd = () => {
    if (repeat) {
      setSeek(0);
      soundRef.current.seek(0);
    }
    nextSong();
  };

  const onLoad = () => {
    const songDuration = soundRef.current.duration();
    setDuration(songDuration);
  };

  useEffect(() => {
    const newIndex = activeSongs.findIndex(
      (active) => active.id === activeSong.id
    );
    setIsIndex(newIndex);
    dispatch(setActiveSong(activeSongs[newIndex]));
  }, [dispatch, activeSongs, activeSong]);

  return (
    <Wrapper>
      <ReactHowler
        ref={soundRef}
        playing={playing}
        src={activeSong.preview_url}
        onLoad={onLoad}
        onEnd={onEnd}
      />
      <div className="click">
        <button>
          <Shuffle onClick={onShuffle} className={shuffle ? 'activesvg' : ''} />
        </button>
        <button>
          <Previous prevSong={prevSong} />
        </button>
        {playing ? (
          <button
            className="btn pause__color"
            onClick={() => setPlayState(false)}
          >
            <MdOutlinePauseCircleFilled />
          </button>
        ) : (
          <button
            className="btn play__color"
            onClick={() => setPlayState(true)}
          >
            <PlayBar />
          </button>
        )}
        <button>
          <Next nextSong={nextSong} />
        </button>
        <span>
          <Repeat onClick={onRepeat} className={repeat ? 'activesvg' : ''} />
        </span>
      </div>
      <div className="input__div">
        <p>1:21</p>
        <div className="range">
          <input name="range" type="range" min="0" max="10" step="0.1" />
        </div>
        <p>3:45</p>
      </div>
    </Wrapper>
  );
};

export default Player;
