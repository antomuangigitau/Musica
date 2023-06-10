import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import search from '../assets/search.png';
const Header = () => {
  return (
    <Wrapper className="flex">
      <Link to="/" className="flex__center">
        <img src={logo} alt="logo" />
      </Link>
      <form className="flex">
        <div className="input flex">
          <img src={search} alt="Search" />
          <input type="text" placeholder="Search artists" />
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  margin: 0 59px 24px 20px;
  grid-area: header;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  a {
    width: 52px;
  }
  form {
    margin-left: 29px;
    width: 100%;
    height: 100%;
    .input {
      border: 1px solid transparent;
      border-radius: 32px;
      flex: 1;
      padding-left: 30px;
      transition: 0.3s linear;
      input {
        width: 100%;
        height: 53px;
        margin-left: 20px;
        margin-right: 60px;
        color: rgba(255, 255, 255, 1);
        font-size: 14px;
        line-height: 18px;
      }
      input::placeholder {
        font-size: 400;
        color: rgba(255, 255, 255, 0.25);
      }
    }
    .input:hover {
      border: 1px solid var(--Grayish);
      border-radius: 32px;
    }
  }
`;
export default Header;
