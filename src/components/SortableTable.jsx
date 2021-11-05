import React, { useMemo } from 'react';
import useData from '../hooks/useData';

function SortableTable() {
  const { data } = useData();
  const rows = useMemo(() => data.features, [data.features]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Magnitude</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ properties }) => {
            const { place, mag, time } = properties;
            const date = new Date(time);
            const dateString = date.toDateString();
            return (
              <tr>
                <td>{place}</td>
                <td>{mag}</td>
                <td>{dateString}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default React.memo(SortableTable);
