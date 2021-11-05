import React, { useMemo, useState, useCallback } from 'react';
import useData from '../hooks/useData';
import { Link } from 'wouter';
import formatDateTime from '../utils/formatDate';

const COLUMNS = [
  { key: 'place', title: 'Title' },
  { key: 'mag', title: 'Magnitude' },
  { key: 'time', title: 'Time' },
];

function SortableTable() {
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
              <th key={key} onClick={() => onColumnHeaderClick(key)}>
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

            return (
              <tr key={id}>
                <td>
                  <Link href={`/quake/${id}`}>{place}</Link>
                </td>
                <td>{mag}</td>
                <td>{formatDateTime(time)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default React.memo(SortableTable);
