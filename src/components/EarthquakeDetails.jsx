import React, { useMemo } from 'react';
import useEarthquakeDetails from '../contexts/DataContext';
import formatDateTime from '../utils/formatDate';
import { genTitleFromMagAndPlace } from '../utils/TableUtils';

function EarthquakeDetails({ id }) {
  const { properties: earthquakeProperties } = useEarthquakeDetails(id);
  const title = useMemo(
    () =>
      genTitleFromMagAndPlace(
        earthquakeProperties.mag,
        earthquakeProperties.place
      ),
    [earthquakeProperties]
  );
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
              <td>{earthquakeProperties.mag}</td>
            </tr>
            <tr>
              <td>Time</td>
              <td>{formatDateTime(earthquakeProperties.time)}</td>
            </tr>
            <tr>
              <td>Status</td>
              <td>{earthquakeProperties.status}</td>
            </tr>
            <tr>
              <td>Tsunami</td>
              <td>{earthquakeProperties.tsunami}</td>
            </tr>
            <tr>
              <td>Type</td>
              <td>{earthquakeProperties.type}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default React.memo(EarthquakeDetails);
