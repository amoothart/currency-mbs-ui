import React, { useEffect, useState } from 'react'
import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { Box, Chip } from '@mui/material';
import { MortgageDTO, getMortgages } from '../services/mortgageService';
import { useVnodeContext } from './VNodeContext';
import { GridNoRowsOverlay } from './GridNoRowsOverlay';
import Typography from '@mui/material/Typography';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';
import IssueMortgageDialog from "./IssueMortgageDialog";

export default function MortgageGrid() {

  const [mortgageData, setMortgageData] = useState<MortgageDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeNode } = useVnodeContext();
  const [open, setOpen] = useState(false);

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

  // row formatting
  const mortgageGridColumnDef: GridColDef[] = [
    { field: 'mortgageId', headerName: 'Mortgage Id', minWidth: 80, flex: 1, },
    { field: 'owner', headerName: 'Owner', minWidth: 120, flex: 1,
      valueGetter: (params) => getSimpleName(params.value)
    },
    { field: 'address', headerName: 'Address', minWidth: 120, flex: 1, },
    { field: 'interestRate', headerName: 'Interest Rate', minWidth: 120, flex: 1, },
    { field: 'fixedInterestRate', headerName: 'Fixed Interest Rate?', minWidth: 120, flex: 1, },
    { field: 'loanToValue', headerName: 'Loan To Value', minWidth: 120, flex: 1, },
    { field: 'condition', headerName: 'Condition', minWidth: 120, flex: 1, },
    { field: 'creditQualityRating', headerName: 'Credit Quality Rating', minWidth: 100, flex: 1,
      renderCell: (params) => getNiceStatus(params.value),
    },
    { field: 'listingDetails', headerName: 'Listing Details', minWidth: 120, flex: 1, },
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
    if (status == 'AAA' || status == 'AA' || status == 'A')
      return (<Chip label={status} color="success" />);
    else
      return (<Chip label={status} color="warning" />);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={2} >
      <IssueMortgageDialog/>
      <Typography variant="h4" component="h1" gutterBottom sx={{ paddingTop: '1rem' }}>
        Mortgages
      </Typography>
      <Box mt={2} style={{ width: '100%' }}>
        <DataGrid disableRowSelectionOnClick
                  slots={{ noRowsOverlay: GridNoRowsOverlay }}
                  loading={isLoading} autoHeight
                  rows={mortgageData}
                  columns={mortgageGridColumnDef}
                  getRowId={(t) => t.mortgageId} />
      </Box>
    </Box>
  );

  async function refreshMortgage() {
    const mortgages = activeNode ? await getMortgages(activeNode!.shortHash) : [];
    const mortgagesWithIds: MortgageDTO[] = mortgages.map((obj, index) => {
      return { ...obj, mortgageId: (index + 1).toString() };
    });
    setMortgageData(mortgagesWithIds);
  }
}
