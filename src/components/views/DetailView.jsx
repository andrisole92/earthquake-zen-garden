import React, { useMemo } from 'react';
import { useEarthquakeDetails } from '../../contexts/DataContext';
import formatDateTime from '../../utils/formatDate';
import { genTitleFromMagAndPlace } from '../../utils/TableUtils';

function DetailView({ id }) {
  const quake = useEarthquakeDetails(id);

  const title = useMemo(
    () =>
      genTitleFromMagAndPlace(
        quake?.properties?.mag ?? '',
        quake?.properties?.place ?? ''
      ) ?? '',
    [quake]
  );

  if (quake == null) {
    return <p>Sorry, no data was found</p>;
  }

  return (
    <>
      <div className='quake'>
        <h2>{title}</h2>
        <table className='quake-table'>
          <colgroup>
            <col span='1' className='wide' />
          </colgroup>
          <tbody>
            <tr>
              <td>Title</td>
              <td>{title}</td>
            </tr>
            <tr>
              <td>Magnitude</td>
              <td>{quake?.properties.mag}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>{formatDateTime(quake?.properties.time)}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{quake?.properties.status}</td>
            </tr>
            <tr>
              <td>Tsunami</td>
              <td>{quake?.properties.tsunami}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{quake?.properties.type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default React.memo(DetailView);
