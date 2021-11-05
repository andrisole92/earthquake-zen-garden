import React, { useMemo } from 'react';
import useData from './useData';

export default function useEarthquake(id) {
  const { data } = useData();
  const quake = useMemo(
    () => data.features.find((row) => row.id === id),
    [data, id]
  );
  return quake;
}
