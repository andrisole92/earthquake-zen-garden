import React from 'react';
import { useActivePageContext } from '../contexts/ActivePageContext';
import useData from '../hooks/useData';

function TopNavigation() {
  const { setActivePage } = useActivePageContext();
  const data = useData();

  return (
    <>
      <header className='header'>
        <span onClick={() => setActivePage('home')} className='logo'>
          Logo
        </span>
        <span onClick={() => setActivePage('home')} className='title'>
          Earthquake Zen Garden
        </span>
        <span
          onClick={(e) => {
            e.stopPropagation();
            setActivePage('profile');
          }}
          className='profile-link'>
          Welcome Sally
        </span>
      </header>
    </>
  );
}

export default React.memo(TopNavigation);
