import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { TradeConfDTO, addTrade } from '../services/tradeService';
import { Controller, DefaultValues, SubmitHandler, useForm } from "react-hook-form"; 
import { useVnodeContext } from './VNodeContext';
import { useTradeDialog } from './TradeDialogProvider';

export interface TradeDialogOptions {
    variant?: 'addTrade' | 'viewTrade' | 'editTrade';
    activeTrade?: TradeConfDTO;
};

export type FormValues = {
    tradeId: string;
    details: string;
    counterParty: string;
};

interface TradeDialogProps extends TradeDialogOptions {
  open: boolean;
};

export function TradeDialog(props: TradeDialogProps) {

  const { handleSubmit, control } = useForm<FormValues>({});
  const { close } = useTradeDialog();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (props.variant === 'addTrade') {
      addTrade(activeNode!.shortHash, data.counterParty, data.tradeId, data.details);
    }
    close();
  };
  
  const { activeNode, setActiveNode, nodes } = useVnodeContext();

  const cpartyMenuItems = nodes.filter(it => it.shortHash != activeNode?.shortHash).map( it =>
    <MenuItem key={it.shortHash} value={it.x500Name}>{it.x500Name}</MenuItem>
  );

  return (
      <Dialog open={props.open} onClose={close}>
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
          <Button onClick={close}>Cancel</Button>
          <Button type={'submit'} >Add Trade</Button>
        </DialogActions>
        </form>
      </Dialog>
  );
}