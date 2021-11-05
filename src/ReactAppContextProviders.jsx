import React from 'react';
import { ActivePageContextProvider } from './contexts/ActivePageContext';

function ReactAppContextProviders({ children }) {
  return <ActivePageContextProvider>{children}</ActivePageContextProvider>;
}

export default React.memo(ReactAppContextProviders);
