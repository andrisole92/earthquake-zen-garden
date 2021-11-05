import React from 'react';
import { useActivePageContext } from '../contexts/ActivePageContext';
import useData from '../hooks/useData';

function TopNavigation() {
  const { setActivePage } = useActivePageContext();
  const { site, profile } = useData();

  return (
    <>
      <header className='header'>
        <span onClick={() => setActivePage('home')} className='header-logo'>
          <img src={site.logoImage} />
        </span>
        <span onClick={() => setActivePage('home')} className='header-title'>
          {site.title}
        </span>
        <a
          href='?activePage=profile'
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setActivePage('profile');
          }}
          className='header-profileLink'>
          {`Welcome ${profile.firstName}`}
        </a>
      </header>
    </>
  );
}

export default React.memo(TopNavigation);
