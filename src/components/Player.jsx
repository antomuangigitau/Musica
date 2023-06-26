import { Wrapper } from '../styled/Player';
import { Next, PlayBar, Previous, Repeat, Shuffle } from '../svgFiles';

const Player = () => {
  return (
    <Wrapper>
      <div>
        <button>
          <Shuffle />
        </button>
        <button>
          <Previous />
        </button>
        <button>
          <PlayBar />
        </button>
        <button>
          <Next />
        </button>
        <span>
          <Repeat />
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
