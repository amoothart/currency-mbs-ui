import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from "@mui/material";
import { Button, FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import {useVnodeContext} from "./VNodeContext";
import {addDigitalCurrency} from "../services/digitalCurrenciesService";

export type FormValues = {
    quantity: string;
    holder: string;
};

const DigitalCurrencyForm = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const { handleSubmit, control } = useForm<FormValues>({});

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log("onSubmit: ", activeNode!.shortHash, data.quantity, data.holder);
        addDigitalCurrency(activeNode!.shortHash, data.holder, data.quantity);
        close();
    };

    const { activeNode, nodes } = useVnodeContext();

    const cpartyMenuItems = nodes.filter(it => it.x500Name != activeNode?.x500Name).map( it =>
        <MenuItem key={it.x500Name} value={it.x500Name}>{it.x500Name}</MenuItem>
    );

    return (
        <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                Issue new Digital Currency
            </Button>
            {open && (
                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <DialogTitle>Issue Digital Currency</DialogTitle>
                        <DialogContent>
                            <DialogContentText mb={3}>
                                To issue new digital currency to a bank, please enter details below.
                            </DialogContentText>
                            <FormControl fullWidth>
                                <InputLabel id="cparty-select-label">Holder</InputLabel>
                                <Controller
                                    render={ ( {field}) => (
                                        <Select {...field}
                                                labelId="cparty-select-label"
                                                id="cparty-select"
                                                defaultValue=""
                                                label="Holder"
                                        >
                                            {cpartyMenuItems}
                                        </Select>
                                    )}
                                    name="holder"
                                    control={control}
                                />
                                <Controller
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            margin="dense"
                                            label="Quantity"
                                            type="text"
                                            fullWidth
                                            variant="standard"
                                        />
                                    )}
                                    name="quantity"
                                    control={control}
                                />
                            </FormControl>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" onClick={handleClose}>Cancel</Button>
                            <Button type="submit">Issue Digital Currency</Button>
                        </DialogActions>
                    </form>
                </Dialog>
            )}
        </div>
    );
};

export default DigitalCurrencyForm;
