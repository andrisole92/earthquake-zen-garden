import React from 'react';
import { useDataContext } from '../contexts/DataContext';
import SortableTable from './SortableTable';

function Home() {
  const { data } = useDataContext();
  return (
    <>
      <div className='homePage'>
        <h2>{data.metadata.title}</h2>
        <SortableTable />
      </div>
    </>
  );
}

export default React.memo(Home);
