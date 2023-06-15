// import { Outlet } from 'react-router-dom';
import { Header, MobileHeader } from '../components';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      {/* <Aside />
      <Outlet />
      <Footer /> */}
    </>
  );
};
export default SharedLayout;
