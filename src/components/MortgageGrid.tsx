import React, { useEffect, useState } from 'react'
import { DataGrid, GridActionsCellItem, GridColDef, GridRenderCellParams, GridRowId } from '@mui/x-data-grid';
import { Box, Button, Chip } from '@mui/material';
import { MortgageDTO, getMortgages } from '../services/mortgageService';
import { useVnodeContext } from './VNodeContext';
import { GridNoRowsOverlay } from './GridNoRowsOverlay';
import {MortgageDialogProvider, useMortgageDialog} from './MortgageDialogProvider';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';

export default function MortgageGrid() {

  const [mortgageData, setMortgageData] = useState<MortgageDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeNode } = useVnodeContext();
  const { openDialog } = useMortgageDialog();

  //reload table with animation after vNode change
  useEffect( () => {
        (async () => {
          setIsLoading(true);
          await refreshMortgage();
          setIsLoading(false);
        })();
        return () => setMortgageData([]);
      }, [activeNode]
  );

  //reload table without animation every 5 secs 
  useEffect(() => {
    const interval = setInterval(refreshMortgage , 5000);
    return () => clearInterval(interval);
  }, []);

  const handleAddDialog = () => {
    openDialog({
      variant: 'addMortgage',
    });
  }

  // row formatting
  const mortgageGridColumnDef: GridColDef[] = [
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

  return (
      <MortgageDialogProvider>
        <Box mt={2} >
          <Button variant="outlined" onClick={ handleAddDialog }>
            Issue new Digital Currency
          </Button>
          <Box mt={2} style={{ width: '100%' }}>
            <DataGrid disableRowSelectionOnClick
                      slots={{ noRowsOverlay: GridNoRowsOverlay }}
                      loading={isLoading} autoHeight
                      rows={mortgageData}
                      columns={mortgageGridColumnDef}
                      getRowId={(t) => t.mortgageId} />
          </Box>
        </Box>
      </MortgageDialogProvider>
  );

  async function refreshMortgage() {
    // const mortgages = activeNode ? await getMortgages(activeNode!.shortHash) : [];
    // const mortgagesWithIds: MortgageDTO[] = mortgages.map((obj, index) => {
    //   return { ...obj, mortgageId: (index + 1).toString() };
    // });
    // setMortgageData(mortgagesWithIds);
  }
}
