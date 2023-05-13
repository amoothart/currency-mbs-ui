import React, { useEffect, useState } from 'react'
import { DataGrid, GridActionsCellItem, GridColDef, GridRenderCellParams, GridRowId } from '@mui/x-data-grid';
import { Box, Button, Chip } from '@mui/material';
import { TradeConfDTO, getTrades } from '../services/tradeService';
import { useVnodeContext } from './VNodeContext';
import { TradeGridNoRowsOverlay } from './TradeGridNoRowsOverlay';
import { useTradeDialog } from './TradeDialogProvider';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';

export default function TradeGrid() {

  const [tradeData, setTradeData] = useState<TradeConfDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeNode } = useVnodeContext();
  const { openDialog } = useTradeDialog();
  
  //reload table with animation after vNode change
  useEffect( () => {
    (async () => {
      setIsLoading(true);
      await refreshTrades();
      setIsLoading(false);
    })();
    return () => setTradeData([]);
    }, [activeNode]
  );

  //reload table without animation every 5 secs 
  useEffect(() => {
    const interval = setInterval(refreshTrades , 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAddDialog = () => {
    openDialog({
        variant: 'addTrade',
    });
  }

  // row formatting
  const tradeGridColumnDef: GridColDef[] = [
    { field: 'tradeId', headerName: 'Trade Id', minWidth: 80, flex: 1, },
    { field: 'participants', headerName: 'Counterparties', minWidth: 120, flex: 1, 
      valueGetter: (params) => params.value.map( getSimpleName ).join(', ')
    },
    { field: 'lastUpdateBy', headerName: 'Last Updated By', minWidth: 120, flex: 1,
      valueGetter: (params) => getSimpleName(params.value)
    },
    { field: 'details', headerName: 'Trade Details', minWidth: 120, flex: 1, },
    { field: 'status', headerName: 'Status', minWidth: 100, flex: 1, 
    renderCell: (params) => getNiceStatus(params.value),
    },
    { field: 'actions', type: 'actions', headerName: 'Actions', minWidth: 80, flex: 1,
    getActions: (params) => [
      <GridActionsCellItem
        icon={<PageviewIcon />}
        label="View"
        onClick={ () => alert('Not implemented') }
      />,
      <GridActionsCellItem
        icon={<EditIcon />}
        label="Edit"
        onClick={ () => alert('Not implemented') }
      />,
    ],
    },
  ];
  
  const getSimpleName = (x500Name : String) => {
    return x500Name.split(',').shift()?.split('=').pop();
  }

  const getNiceStatus = (status: String) => {
    if (status == 'SHARED') return (
      <Chip label="shared" color="success" />
    );
  }

  return (
    <Box mt={2} >
      <Button variant="outlined" onClick={ handleAddDialog }>
        Share new Trade Confirmation 
      </Button>
      <Box mt={2} style={{ width: '100%' }}>
        <DataGrid disableRowSelectionOnClick slots={{ noRowsOverlay: TradeGridNoRowsOverlay }} loading={isLoading} autoHeight rows={tradeData} columns={tradeGridColumnDef} getRowId={(t) => t.tradeId} />
      </Box>
    </Box>
  );

  async function refreshTrades() {
    const trades = activeNode ? await getTrades(activeNode!.shortHash) : [];
    const sortedTrades = trades.sort( (a,b)=>a.tradeId.localeCompare(b.tradeId) );
    setTradeData(sortedTrades);
  }
}
  