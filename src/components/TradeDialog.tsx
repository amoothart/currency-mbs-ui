import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { VDataContext } from './VNodeContext';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { ShortNodeInfo, getVnodes } from '../services/niceCordaApi';
import { useEffect, useState } from 'react';
import { TradeConfDTO, addTrade } from '../services/tradeService';
import { Controller, DefaultValues, SubmitHandler, useForm } from "react-hook-form"; 

interface TradeDialogProps {
    variant: 'addTrade' | 'viewTrade';
    activeTrade?: TradeConfDTO;
};

export type FormValues = {
    tradeId: string;
    details: string;
    counterParty: string;
};

export function TradeDialog(props: TradeDialogProps) {

  const defaultValues: DefaultValues<FormValues> = {
    tradeId: props.activeTrade?.tradeId ?? "",
    details: props.activeTrade?.tradeId ?? "",
    counterParty: props.activeTrade?.tradeId ?? "",
  };

  const [open, setOpen] = React.useState(false);

  const { handleSubmit, control } = useForm<FormValues>({ defaultValues });
  
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    addTrade(vNode!.shortHash, data.counterParty, data.tradeId, data.details);
    handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { vNode, } = React.useContext(VDataContext);

    //fetch cParties
    const [ availableNodes, setAvailableNodes ] = useState<ShortNodeInfo[]>([]);
    useEffect( () => {
      (async () => {
        const newNodes = (await getVnodes()).sort((a, b) => a.x500Name.localeCompare(b.x500Name));
        setAvailableNodes(newNodes);
      })();
    }, []);
    const cpartyMenuItems = availableNodes.filter(it => it.shortHash != vNode!.shortHash).map( it =>
      <MenuItem key={it.shortHash} value={it.x500Name}>{it.x500Name}</MenuItem>
    );

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Share new Trade Confirmation 
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>New trade confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText mb={3}>
            To share a new trade confirmation with your counterparty, please enter the confirmation details in below form.
          </DialogContentText>
          <FormControl fullWidth>
          <InputLabel id="cparty-select-label">Counterparty</InputLabel>
          <Controller
    control={control}
    name="counterParty"
    render={ ( {field}) => (
      <Select {...field}
      labelId="cparty-select-label"
      id="cparty-select"
      defaultValue=""
      label="Counterparty"
  >
        {cpartyMenuItems}
        </Select>
    )}
  />
              <Controller
              render={({ field }) => (
                <TextField
                {...field}
                margin="dense"
                label="Trade Identifier"
                type="text"
                fullWidth
                variant="standard"
              />
              )}
              name="tradeId"
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField
                {...field}
                margin="dense"
                label="Trade Details"
                type="text"
                fullWidth
                variant="standard"
              />
              )}
              name="details"
              control={control}
            />
            </FormControl>
            </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type={'submit'} >Add Trade</Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}