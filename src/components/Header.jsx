import { Logo, Search } from '../svgFiles';
import { Link } from 'react-router-dom';
import { Wrapper } from '../styled/Header';
const Header = () => {
  return (
    <Wrapper className="m-x">
      <Link to="/">
        <Logo />
      </Link>
      <form>
        <div className="input flex">
          <Search />
          <input type="text" placeholder="Search artists" />
        </div>
      </form>
    </Wrapper>
  );
};

export default Header;
