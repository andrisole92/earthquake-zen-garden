import React from 'react';
import EarthquakeDetails from './components/EarthquakeDetails';
import Home from './components/Home';
import Profile from './components/Profile';
import TopNavigation from './components/TopNavigation';
import { Router, Route } from 'wouter';

function ReactAppRouter() {
  return (
    <>
      <TopNavigation />
      <Router>
        <Route path='/' component={Home} />
        <Route path='/home' component={Home} />
        <Route path='/profile' component={Profile} />
        <Route path='/quake/:id'>
          {(params) => <EarthquakeDetails id={params.id} />}
        </Route>
      </Router>
    </>
  );
}

export default React.memo(ReactAppRouter);
