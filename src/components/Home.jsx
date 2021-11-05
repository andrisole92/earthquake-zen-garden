import React from 'react';
import useData from '../hooks/useData';
import SortableTable from './SortableTable';

function Home() {
  const { data } = useData();
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
