import React, { useContext, useMemo } from 'react';
import { data } from '../data/data';

const DataContext = React.createContext(data);

export function DataContextProvider({ children }) {
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useDataContext() {
  const context = useContext(DataContext);
  if (context == null) {
    throw new Error('useDataContext should be used within DataContextProvider');
  }
  return context;
}

export default function useEarthquakeDetails(id) {
  const { data } = useDataContext();

  const quake = useMemo(
    () => data.features.find((row) => row.id === id),
    [data, id]
  );

  return quake;
}
