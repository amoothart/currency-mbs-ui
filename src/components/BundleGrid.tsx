import React, { useEffect, useState } from 'react'
import { DataGrid, GridActionsCellItem, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';
import { BundleDTO, getBundles } from '../services/bundleService';
import { useVnodeContext } from './VNodeContext';
import { GridNoRowsOverlay } from './GridNoRowsOverlay';
import Typography from '@mui/material/Typography';
import PageviewIcon from '@mui/icons-material/Pageview';
import EditIcon from '@mui/icons-material/Edit';
import SellMortgageDialog from "./SellMortgageDialog";
import ViewMortgagesDialog from "./ViewMortgagesDialog";

export default function BundleGrid() {

  const [bundleData, setBundleData] = useState<BundleDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { activeNode } = useVnodeContext();
  const [open, setOpen] = useState(false);

  //reload table with animation after vNode change
  useEffect( () => {
        (async () => {
          setIsLoading(true);
          await refreshBundle();
          setIsLoading(false);
        })();
        return () => setBundleData([]);
      }, [activeNode]
  );

  //reload table without animation every 5 secs 
  useEffect(() => {
    const interval = setInterval(refreshBundle , 5000);
    return () => clearInterval(interval);
  }, []);

  // row formatting
  const bundleGridColumnDef: GridColDef[] = [
    { field: 'bundleId', headerName: 'Bundle Id', minWidth: 80, flex: 1, },
    { field: 'originator', headerName: 'Originator', minWidth: 120, flex: 1,
      valueGetter: (params) => getSimpleName(params.value)
    },
    { field: 'mortgages', headerName: 'Mortgages', minWidth: 120, flex: 1, },
    { field: 'actions', type: 'actions', headerName: 'Actions', minWidth: 80, flex: 1,
      getActions: (params) => {
        const bundleId = params.row.bundleId;
        return [
          <ViewMortgagesDialog bundleId={bundleId}/>,
          <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              onClick={ () => alert('Not implemented') }
          />
        ]
      },
    },
  ];

  const getSimpleName = (x500Name : String) => {
    return x500Name.split(',').shift()?.split('=').pop();
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={2} >
      <Typography variant="h4" component="h1" gutterBottom sx={{ paddingTop: '1rem' }}>
        Bundles
      </Typography>
      <Box mt={2} style={{ width: '100%' }}>
        <DataGrid disableRowSelectionOnClick
                  slots={{ noRowsOverlay: GridNoRowsOverlay }}
                  loading={isLoading} autoHeight
                  rows={bundleData}
                  columns={bundleGridColumnDef}
                  getRowId={(t) => t.bundleId}
                  />
      </Box>
    </Box>
  );

  async function refreshBundle() {
    const bundles = activeNode ? await getBundles(activeNode!.shortHash) : [];
    setBundleData(bundles);
  }
}
