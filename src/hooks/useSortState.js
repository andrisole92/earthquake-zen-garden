import React, { useState } from 'react';

export default function useSortState() {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortColumn, setSortColumn] = useState(null);

  return {
    sortOrder,
    setSortOrder,
    sortColumn,
    setSortColumn,
  };
}
