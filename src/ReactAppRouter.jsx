import React from 'react';
import EarthquakeDetails from './components/EarthquakeDetails';
import Home from './components/Home';
import Profile from './components/Profile';
import TopNavigation from './components/TopNavigation';
import { useActivePageContext } from './contexts/ActivePageContext';

function ReactAppRouter() {
  const { activePage } = useActivePageContext();
  return (
    <>
      <TopNavigation />
      {(activePage === '' || activePage === null) && <Home />}
      {activePage === 'home' && <Home />}
      {activePage === 'profile' && <Profile />}
      {activePage === 'quake' && <EarthquakeDetails />}
    </>
  );
}

export default React.memo(ReactAppRouter);
