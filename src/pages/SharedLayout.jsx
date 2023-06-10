import { Outlet } from 'react-router-dom';
import { Footer, Header, Aside } from '../components';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Aside />
      <Outlet />
      <Footer />
    </>
  );
};
export default SharedLayout;
