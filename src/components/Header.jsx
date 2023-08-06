import { Logo, Search } from '../svgFiles';
import { Link } from 'react-router-dom';
import { Wrapper } from '../styled/Header';
import { setText } from '../features/apiSlice';
import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
const Header = () => {
  const { text } = useSelector((state) => state.playlist);
  const dispatch = useDispatch();
  const updateSearch = (e) => {
    const name = e.target.value;
    dispatch(setText(name));
  };

  return (
    <Wrapper className="m-x">
      <Link to="/">
        <Logo />
      </Link>
      <form onSubmit={(e) => e.preventDefault()}>
        <Link to="search" className="input flex">
          <Search />
          <input
            type="text"
            placeholder="Search artists & songs"
            value={text}
            onChange={updateSearch}
          />
        </Link>
      </form>
    </Wrapper>
  );
};

export default Header;
