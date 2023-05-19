import React, { useEffect, useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import { Box, Button, Chip } from '@mui/material';
import {useVnodeContext} from "./VNodeContext";
import {GridNoRowsOverlay} from "./GridNoRowsOverlay";
import {getMortgagesByBundleId, MortgageDTO} from "../services/mortgageService";
import VisibilityIcon from '@mui/icons-material/Visibility';

export type FormValues = {
    owner: string;
    address: string;
    interestRate: string;
    fixedInterestRate: string;
    loanToValue: string;
    condition: string;
    creditQualityRating: string;
    listingDetails: string;
};

const ViewMortgagesDialog = ({bundleId = ""}) => {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { activeNode } = useVnodeContext();
    const [mortgageData, setMortgageData] = useState<MortgageDTO[]>([]);

    //reload table with animation after vNode change
    useEffect( () => {
            (async () => {
                setIsLoading(true);
                await refreshMortgages();
                setIsLoading(false);
            })();
            return () => setMortgageData([]);
        }, [activeNode]
    );

    //reload table without animation every 5 secs
    // useEffect(() => {
    //     debugger
    //     return;
    // }, [mortgageData]);

    // row formatting
    const mortgageGridColumnDef: GridColDef[] = [
        { field: 'mortgageId', headerName: 'Mortgage Id', minWidth: 80, flex: 1, },
        { field: 'owner', headerName: 'Owner', minWidth: 120, flex: 1,
            valueGetter: (params) => getSimpleName(params.value)
        },
        { field: 'address', headerName: 'Address', minWidth: 120, flex: 1, },
        { field: 'interestRate', headerName: 'Interest Rate', minWidth: 120, flex: 1, },
        { field: 'fixedInterestRate', headerName: 'Fixed Interest Rate?', minWidth: 120, flex: 1,
            valueGetter: (params) => params.value == "true" ? "Yes" : "No"
        },
        { field: 'loanToValue', headerName: 'Loan To Value', minWidth: 120, flex: 1, },
        { field: 'condition', headerName: 'Condition', minWidth: 120, flex: 1, },
        { field: 'creditQualityRating', headerName: 'Credit Quality Rating', minWidth: 100, flex: 1,
            renderCell: (params) => getNiceStatus(params.value),
        },
        { field: 'listingDetails', headerName: 'Listing Details', minWidth: 120, flex: 1, },
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
        <div>
            <GridActionsCellItem
                icon={<VisibilityIcon />}
                label="View Mortgages"
                onClick={() => setOpen(true)}/>
            {open && (
                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Bundled Mortgages</DialogTitle>
                    <DialogContent>
                        <DialogContentText mb={3}>
                            Mortgages included in the bundle:
                        </DialogContentText>
                        <Box mt={2} style={{ width: '100%' }}>
                            <DataGrid slots={{ noRowsOverlay: GridNoRowsOverlay }}
                                      loading={isLoading} autoHeight
                                      rows={mortgageData}
                                      columns={mortgageGridColumnDef}
                                      getRowId={(t) => t.mortgageId}
                            />
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );

    async function refreshMortgages() {
        const mortgages = activeNode ? await getMortgagesByBundleId(activeNode!.shortHash, bundleId) : [];
        setMortgageData(mortgages);
    }
};

export default ViewMortgagesDialog;