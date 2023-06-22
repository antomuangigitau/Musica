import { Outlet } from 'react-router-dom';
import { Header, MobileHeader, Aside, Footer } from '../components';
import styled from 'styled-components';
const SharedLayout = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <Wrapper className="m-x">
        <Aside />
        <Outlet />
      </Wrapper>
      {/* <Footer /> */}
    </>
  );
};

const Wrapper = styled.main`
  grid-area: main;
  @media (min-width: 48rem) {
    display: flex;
  }
`;
export default SharedLayout;
