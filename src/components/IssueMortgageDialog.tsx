import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {useVnodeContext} from "./VNodeContext";
import {addMortgage} from "../services/mortgageService";

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

const MortgageForm = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const { handleSubmit, control } = useForm<FormValues>({});

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("onSubmit: ", activeNode!.shortHash, data.owner, data.address, data.interestRate);
        addMortgage(activeNode!.shortHash,
            data.owner,
            data.address,
            data.interestRate,
            data.fixedInterestRate,
            data.loanToValue,
            data.condition,
            data.creditQualityRating,
            data.listingDetails);
        handleClose();
    };

    const { activeNode, nodes } = useVnodeContext();

    const cpartyMenuItems = nodes.filter(it => it.x500Name == activeNode?.x500Name).map( it =>
        <MenuItem key={it.x500Name} value={it.x500Name}>{it.x500Name}</MenuItem>
    );

    return (
        <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                Originate new Mortgage
            </Button>
            {open && (
                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogTitle>Originate new Mortgage</DialogTitle>
                        <DialogContent>
                            <DialogContentText mb={3}>
                                To originate a new mortgage to a bank, please enter details below.
                            </DialogContentText>
                            <FormControl fullWidth>
                                <InputLabel id="cparty-select-label">Owner</InputLabel>
                                <Controller
                                    render={ ( {field}) => (
                                        <Select {...field}
                                                labelId="cparty-select-label"
                                                id="cparty-select"
                                                defaultValue=""
                                                label="Owner"
                                        >
                                            {cpartyMenuItems}
                                        </Select>
                                    )}
                                    name="owner"
                                    control={control}
                                />
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="dense"
                                            label="Address"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    )}
                                    name="address"
                                    control={control}
                                />
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="dense"
                                            label="Interest Rate"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    )}
                                    name="interestRate"
                                    control={control}
                                />
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="dense"
                                            label="Fixed Interest Rate?"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    )}
                                    name="fixedInterestRate"
                                    control={control}
                                />
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="dense"
                                            label="Loan To Value"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    )}
                                    name="loanToValue"
                                    control={control}
                                />
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="dense"
                                            label="Condition"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    )}
                                    name="condition"
                                    control={control}
                                />
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="dense"
                                            label="Credit Quality Rating"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    )}
                                    name="creditQualityRating"
                                    control={control}
                                />
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="dense"
                                            label="Listing Details"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    )}
                                    name="listingDetails"
                                    control={control}
                                />
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Originate Mortgage</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            )}
        </div>
    );
};

export default MortgageForm;
