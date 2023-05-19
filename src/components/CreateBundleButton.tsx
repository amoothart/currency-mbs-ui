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

        </div>
    );
};

export default MortgageForm;
