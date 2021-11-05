import React, { useMemo, useState, useCallback } from 'react';
import useData from '../hooks/useData';
import { useLocation, Link } from 'wouter';

const COLUMNS = [
  { key: 'place', title: 'Title' },
  { key: 'mag', title: 'Magnitude' },
  { key: 'time', title: 'Time' },
];

function SortableTable() {
  const [, setLocation] = useLocation();
  const { data } = useData();
  const rows = useMemo(() => data.features, [data.features]);
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortColumn, setSortColumn] = useState('place');

  const sortedRows = useMemo(() => {
    return rows.sort((r1, r2) => {
      const val1 = r1.properties[sortColumn].toString();
      const val2 = r2.properties[sortColumn].toString();
      return sortOrder === 'asc'
        ? val1.localeCompare(val2)
        : val2.localeCompare(val1);
    });
  }, [rows, sortOrder, sortColumn]);

  const onColumnHeaderClick = useCallback(
    (columnKey) => {
      if (columnKey === sortColumn) {
        setSortOrder((localOrder) => (localOrder === 'asc' ? 'desc' : 'asc'));
      } else {
        setSortColumn(columnKey);
        setSortOrder('desc');
      }
    },
    [sortColumn]
  );

  return (
    <>
      <table className='sortableTable'>
        <thead>
          <tr>
            {COLUMNS.map(({ key, title }) => (
              <th onClick={() => onColumnHeaderClick(key)}>
                <span>{title}</span>
                {sortColumn === key && (
                  <span>{sortOrder === 'desc' ? '⬇️' : '⬆️'}</span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map(({ properties, id }) => {
            const { place, mag, time } = properties;
            const date = new Date(time);
            const dateString = date.toLocaleDateString('en', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            const timeString = date.toLocaleTimeString('en');
            return (
              <tr key={id}>
                <Link href={`/quake/${id}`}>{place}</Link>
                <td>{mag}</td>
                <td>{`${dateString}, ${timeString}`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default React.memo(SortableTable);
