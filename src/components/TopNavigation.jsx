import React from 'react';
import { useLocation, Link } from 'wouter';
import { useDataContext } from '../contexts/DataContext';

function TopNavigation() {
  const [, setLocation] = useLocation();
  const { site, profile } = useDataContext();

  return (
    <>
      <header className='header'>
        <span onClick={() => setLocation('/home')} className='header-logo'>
          <img src={site.logoImage} />
        </span>
        <span onClick={() => setLocation('/home')} className='header-title'>
          {site.title}
        </span>
        <Link href='/profile' className='header-profileLink'>
          {`Welcome ${profile.firstName}`}
        </Link>
      </header>
    </>
  );
}

export default React.memo(TopNavigation);
