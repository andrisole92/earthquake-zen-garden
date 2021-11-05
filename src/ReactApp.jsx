import React from 'react';
import ReactAppContextProviders from './ReactAppContextProviders';
import ReactAppRouter from './ReactAppRouter';

function ReactApp() {
  return (
    <ReactAppContextProviders>
      <ReactAppRouter />
    </ReactAppContextProviders>
  );
}

export default React.memo(ReactApp);
