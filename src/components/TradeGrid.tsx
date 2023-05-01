import React, { useState, useEffect } from 'react'
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { getTradeNumber } from '../services/tradeService'

const rows: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'World' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const rows1: GridRowsProp = [
  { id: 1, col1: 'Hello', col2: 'Waarld' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
  { id: 3, col1: 'MUI', col2: 'is Amazing' },
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
];

export default function TradeGrid() {

  const [tradeData, setTradeData] = useState(rows);

  function handleUpdate() {
    alert("hi");
    getTradeNumber()
      .then((newnumber) => alert('we did it'))
      .catch((err) => alert('Error'));
    setTradeData(rows1);
  }

  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={tradeData} columns={columns} />
      <button onClick={() => {
        handleUpdate();
      }}>Update</button>
    </div>
  );
  }
  