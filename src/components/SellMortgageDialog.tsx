import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {useVnodeContext} from "./VNodeContext";
import {sellMortgage} from "../services/mortgageService";
import {GridActionsCellItem} from "@mui/x-data-grid/components/cell/GridActionsCellItem";
import SellIcon from '@mui/icons-material/Sell';

export type FormValues = {
    buyer: string;
    mortgageId: string;
    price: string;
};

const MortgageForm = ({mortgageId = ""}) => {
    const [open, setOpen] = useState(false);
    // const [mortgageId, setMortgageId] = useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const { handleSubmit, control } = useForm<FormValues>({});

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("onSubmit: ", activeNode!.shortHash, data.buyer, data.price);
        sellMortgage(activeNode!.shortHash,
            [mortgageId],
            data.buyer,
            data.price);
        handleClose();
    };

    const { activeNode, nodes } = useVnodeContext();

    const cpartyMenuItems = nodes.filter(it => it.x500Name != activeNode?.x500Name).map( it =>
        <MenuItem key={it.x500Name} value={it.x500Name}>{it.x500Name}</MenuItem>
    );

    return (
        <div>
            <GridActionsCellItem
                icon={<SellIcon />}
                label="Sell Mortgage"
                onClick={() => setOpen(true)}/>
            {open && (
                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogTitle>Sell a Mortgage</DialogTitle>
                        <DialogContent>
                            <DialogContentText mb={3}>
                                To sell a mortgage to another bank, please enter details below.
                            </DialogContentText>
                            <FormControl fullWidth>
                                <InputLabel id="cparty-select-label">Buyer</InputLabel>
                                <Controller
                                    render={ ( {field}) => (
                                        <Select {...field}
                                                labelId="cparty-select-label"
                                                id="cparty-select"
                                                defaultValue=""
                                                label="Buyer"
                                        >
                                            {cpartyMenuItems}
                                        </Select>
                                    )}
                                    name="buyer"
                                    control={control}
                                />
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="dense"
                                            label="MortgageId"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                            value={mortgageId}
                                        />
                                    )}
                                    name="mortgageId"
                                    control={control}
                                />
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="dense"
                                            label="Price"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    )}
                                    name="price"
                                    control={control}
                                />
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Sell Mortgage</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            )}
        </div>
    );
};

export default MortgageForm;
