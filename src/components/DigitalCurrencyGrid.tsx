import React, { useEffect, useState } from 'react'
import { DataGrid, GridActionsCellItem, GridColDef, GridRenderCellParams, GridRowId } from '@mui/x-data-grid';
import { Box, Button, Chip } from '@mui/material';
import { DigitalCurrencyDTO, getDigitalCurrencies } from '../services/digitalCurrenciesService';
import { useVnodeContext } from './VNodeContext';
import { DigitalCurrenciesGridNoRowsOverlay } from './DigitalCurrenciesGridNoRowsOverlay';
import { useDigitalCurrenciesDialog } from './DigitalCurrenciesDialogProvider';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';

export default function DigitalCurrencyGrid() {

  const [digitalCurrenciesData, setDigitalCurrenciesData] = useState<DigitalCurrencyDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeNode } = useVnodeContext();
  const { openDialog } = useDigitalCurrenciesDialog();

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

  const handleAddDialog = () => {
    openDialog({
      variant: 'addDigitalCurrency',
    });
  }

  // row formatting
  const digitalCurrenciesGridColumnDef: GridColDef[] = [
    { field: 'digitalCurrencyId', headerName: 'Currency Id', minWidth: 80, flex: 1, },
    // { field: 'participants', headerName: 'Counterparties', minWidth: 120, flex: 1,
    //   valueGetter: (params) => params.value.map( getSimpleName ).join(', ')
    // },
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

  return (
      <Box mt={2} >
        <Button variant="outlined" onClick={ handleAddDialog }>
          Issue new Digital Currency
        </Button>
        <Box mt={2} style={{ width: '100%' }}>
          <DataGrid disableRowSelectionOnClick slots={{ noRowsOverlay: DigitalCurrenciesGridNoRowsOverlay }} loading={isLoading} autoHeight rows={digitalCurrenciesData} columns={digitalCurrenciesGridColumnDef} getRowId={(t) => t.digitalCurrencyId} />
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
