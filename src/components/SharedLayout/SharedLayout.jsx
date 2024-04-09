import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StarScreen } from '../StartScreen/StarScreen';

const SharedLayout = () => {

  const handleNavigate = () => {
    window.scrollTo(0, 0);
  };
  const location = useLocation();

  useEffect(() => {
    handleNavigate();
  }, [location.pathname]);

  return (
    <>
      <header>
        <Header/>
      </header>
      <Suspense fallback="....">
        <Outlet />
      </Suspense>
      <StarScreen/>
      <Footer/>
    </>
  );
};

export default SharedLayout;
