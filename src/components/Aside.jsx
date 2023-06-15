import { sidebarItems } from '../data';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
const Aside = () => {
  return (
    <Wrapper>
      <div>
        {sidebarItems.slice(0, 4).map((item, index) => {
          const { icon: Icon, path } = item;
          return (
            <NavLink
              key={index}
              to={path}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'actives' : ''
              }
            >
              {/* <img src={icon} alt={`image ${index}`} /> */}
              <Icon />
            </NavLink>
          );
        })}
      </div>
      <div>
        {sidebarItems.slice(4, 6).map((item, index) => {
          const { icon: Icon, path } = item;
          return (
            <NavLink
              key={index}
              to={path}
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'actives' : ''
              }
            >
              <Icon />
            </NavLink>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  grid-area: aside;
  margin-left: 20px;
  margin-right: 29px;
  div {
    width: 52px;
    padding: 25px 0;
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1a1e1f;
    a:not(:last-child) {
      padding-bottom: 30px;
    }
  }
  div:last-child {
    margin-top: 20px;
  }
`;
export default Aside;
