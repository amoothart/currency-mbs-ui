import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { TradeConfDTO, getTrades } from '../services/tradeService';
import { VDataContext } from './VNodeContext';
import { styled } from '@mui/material/styles';

const StyledGridOverlay = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  '& .ant-empty-img-1': {
    fill: theme.palette.mode === 'light' ? '#aeb8c2' : '#262626',
  },
  '& .ant-empty-img-2': {
    fill: theme.palette.mode === 'light' ? '#f5f5f7' : '#595959',
  },
  '& .ant-empty-img-3': {
    fill: theme.palette.mode === 'light' ? '#dce0e6' : '#434343',
  },
  '& .ant-empty-img-4': {
    fillOpacity: theme.palette.mode === 'light' ? '0.8' : '0.08',
    fill: theme.palette.mode === 'light' ? '#f5f5f5' : '#fff',
  },
}));

function CustomNoRowsOverlay() {
  return (
    <StyledGridOverlay>
      <svg
        width="120"
        height="100"
        viewBox="0 0 184 152"
        aria-hidden
        focusable="false"
      >
        <g fill="none" fillRule="evenodd">
          <g transform="translate(24 31.67)">
            <ellipse
              className="ant-empty-img-4"
              cx="67.797"
              cy="106.89"
              rx="67.797"
              ry="12.668"
            />
            <path
              className="ant-empty-img-1"
              d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
            />
            <path
              className="ant-empty-img-2"
              d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
            />
            <path
              className="ant-empty-img-3"
              d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
            />
          </g>
        </g>
      </svg>
      <Box sx={{ m: 1 }} color="text.secondary">No Trade Records found</Box>
    </StyledGridOverlay>
  );
}

const columns: GridColDef[] = [
  { field: 'tradeId', headerName: 'Trade Identifier', width: 200},
  { field: 'lastUpdateBy', headerName: 'Last Updated By', width: 200,
  valueGetter: (params) => {
    if (!params.value) {
      return params.value;
    }
    // Convert the decimal value to a percentage
    return params.value.split(',').shift();
  } },
  { field: 'details', headerName: 'Trade Details', width: 200 },
  { field: 'status', headerName: 'Status', width: 200 },
];

export default function TradeGrid() {

  const [tradeData, setTradeData] = useState<TradeConfDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { vNode, } = React.useContext(VDataContext);

  //reload table after vNode change 
  useEffect( () => {
    (async () => {
      setTradeData([]);
      setIsLoading(true);
      const trades = await getTrades(vNode!.shortHash);
      setTradeData(trades);
      setIsLoading(false);
    })();
  },
  [vNode]);

  return (
    <Box mt={2} style={{ width: '100%' }}>
      <DataGrid slots={{ noRowsOverlay: CustomNoRowsOverlay }} loading={isLoading} autoHeight rows={tradeData} columns={columns} getRowId={(t) => t.tradeId} />
    </Box>
  );
  }
  