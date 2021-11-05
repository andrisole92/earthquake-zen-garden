import React from 'react';
import { DataContextProvider } from './contexts/DataContext';

function ReactAppContextProviders({ children }) {
  return <DataContextProvider>{children}</DataContextProvider>;
}

export default React.memo(ReactAppContextProviders);
