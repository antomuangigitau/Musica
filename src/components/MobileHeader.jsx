import { Hamburger, Logo, Search, Close } from '../svgFiles';
import { Link, NavLink } from 'react-router-dom';
import { sidebarItems } from '../data';
import { useDispatch, useSelector } from 'react-redux';
import { setIsClose, setIsOpen, setText } from '../features/apiSlice';
import { Wrapper } from '../styled/MobileHeader';
const MobileHeader = () => {
  const dispatch = useDispatch();
  const { isOpen, text } = useSelector((state) => state.playlist);
  const updateSearch = (e) => {
    const name = e.target.value;
    dispatch(setText(name));
  };
  return (
    <Wrapper className="m-x">
      <button onClick={() => dispatch(setIsOpen())} type="button">
        <Hamburger />
      </button>
      <div className="header__nav">
        <Link to="/">
          <Logo />
        </Link>
        <Link to="search" className="search-bar">
          <input
            className="search-bar__input"
            type="text"
            placeholder="Search artists & songs"
            value={text}
            onChange={updateSearch}
          />
          <button className="search-bar__submit" type="button">
            <Search />
          </button>
        </Link>
      </div>
      <div className={`container ${isOpen ? 'fade-in' : 'fade-out'}`}>
        <button
          type="button"
          className={isOpen ? 'btn__active btn' : 'btn'}
          onClick={() => dispatch(setIsClose())}
        >
          <Close />
        </button>
        <ul>
          {sidebarItems.map((item, index) => {
            const { path, title, icon: Icon } = item;
            return (
              <li key={index}>
                <NavLink
                  onClick={() => dispatch(setIsClose())}
                  to={path}
                  className={({ isActive, isPending }) =>
                    isPending ? 'pending' : isActive ? 'actives' : ''
                  }
                >
                  <Icon />
                  <span>{title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default MobileHeader;
