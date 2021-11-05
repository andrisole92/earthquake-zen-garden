import React, { useMemo, useState, useCallback } from 'react';
import { Link } from 'wouter';
import formatDateTime from '../utils/formatDate';
import { useDataContext } from '../contexts/DataContext';

const COLUMNS = [
  { key: 'place', title: 'Title' },
  { key: 'mag', title: 'Magnitude' },
  { key: 'time', title: 'Time' },
];

function SortableTable() {
  const { data } = useDataContext();
  const rows = useMemo(() => data.features, [data.features]);
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortColumnKey, setSortColumnKey] = useState('place');

  const sortedRows = useMemo(() => {
    return rows.sort((r1, r2) => {
      const val1 = r1.properties[sortColumnKey].toString();
      const val2 = r2.properties[sortColumnKey].toString();
      return sortOrder === 'asc'
        ? val1.localeCompare(val2)
        : val2.localeCompare(val1);
    });
  }, [rows, sortOrder, sortColumnKey]);

  const onColumnHeaderClick = useCallback(
    (columnKey) => {
      if (columnKey === sortColumnKey) {
        setSortOrder((localOrder) => (localOrder === 'asc' ? 'desc' : 'asc'));
      } else {
        setSortColumnKey(columnKey);
        setSortOrder('desc');
      }
    },
    [sortColumnKey]
  );

  return (
    <>
      <table className='sortableTable'>
        <thead>
          <tr>
            {COLUMNS.map(({ key, title }) => (
              <th key={key} onClick={() => onColumnHeaderClick(key)}>
                <span>{title}</span>
                {sortColumnKey === key && (
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
