import React from 'react';
import TopNavigation from './components/TopNavigation';
import { Router, Route } from 'wouter';
import HomeView from './components/views/HomeView';
import ProfileView from './components/views/ProfileView';
import DetailView from './components/views/DetailView';

function ReactAppRouter() {
  return (
    <>
      <TopNavigation />
      <Router>
        <Route path='/' component={HomeView} />
        <Route path='/home' component={HomeView} />
        <Route path='/profile' component={ProfileView} />
        <Route path='/quake/:id'>
          {(params) => <DetailView id={params.id} />}
        </Route>
      </Router>
    </>
  );
}

export default React.memo(ReactAppRouter);
