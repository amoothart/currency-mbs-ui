import React, { useEffect, useState } from 'react'
import { DataGrid, GridActionsCellItem, GridColDef, GridRenderCellParams, GridRowId } from '@mui/x-data-grid';
import { Box, Chip } from '@mui/material';
import { DigitalCurrencyDTO, getDigitalCurrencies } from '../services/digitalCurrenciesService';
import { useVnodeContext } from './VNodeContext';
import { GridNoRowsOverlay } from './GridNoRowsOverlay';
import Typography from '@mui/material/Typography';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';
import IssueDigitalCurrencyDialog from "./IssueDigitalCurrencyDialog";

export default function DigitalCurrencyGrid() {

  const [digitalCurrenciesData, setDigitalCurrenciesData] = useState<DigitalCurrencyDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeNode } = useVnodeContext();
  const [open, setOpen] = useState(false);

  //reload table with animation after vNode change
  useEffect( () => {
        (async () => {
          setIsLoading(true);
          await refreshDigitalCurrencies();
          setIsLoading(false);
        })();
        return () => setDigitalCurrenciesData([]);
      }, [activeNode]
  );

  //reload table without animation every 5 secs 
  useEffect(() => {
    const interval = setInterval(refreshDigitalCurrencies , 5000);
    return () => clearInterval(interval);
  }, []);

  // row formatting
  const digitalCurrenciesGridColumnDef: GridColDef[] = [
    { field: 'digitalCurrencyId', headerName: 'Currency Id', minWidth: 80, flex: 1, },
    { field: 'holder', headerName: 'Holder', minWidth: 120, flex: 1,
      valueGetter: (params) => getSimpleName(params.value)
    },
    { field: 'quantity', headerName: 'Quantity', minWidth: 120, flex: 1, },
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

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={2} >
      <IssueDigitalCurrencyDialog/>
      <Typography variant="h4" component="h1" gutterBottom sx={{ paddingTop: '1rem' }}>
        Digital Currency Token Balances
      </Typography>
      <Box mt={2} style={{ width: '100%' }}>
        <DataGrid disableRowSelectionOnClick slots={{ noRowsOverlay: GridNoRowsOverlay }} loading={isLoading} autoHeight rows={digitalCurrenciesData} columns={digitalCurrenciesGridColumnDef} getRowId={(t) => t.digitalCurrencyId} />
      </Box>
    </Box>
  );

  async function refreshDigitalCurrencies() {
    const digitalCurrency = activeNode ? await getDigitalCurrencies(activeNode!.shortHash) : [];
    const digitalCurrencyWithIds: DigitalCurrencyDTO[] = digitalCurrency.map((obj, index) => {
      return { ...obj, digitalCurrencyId: (index + 1).toString() };
    });
    setDigitalCurrenciesData(digitalCurrencyWithIds);
  }
}
