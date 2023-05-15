import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { DigitalCurrencyDTO, addDigitalCurrency } from '../services/digitalCurrenciesService';
import { Controller, DefaultValues, SubmitHandler, useForm } from "react-hook-form"; 
import { useVnodeContext } from './VNodeContext';
import { useDigitalCurrenciesDialog } from './DigitalCurrenciesDialogProvider';

export interface DigitalCurrencyDialogOptions {
    variant?: 'addDigitalCurrency' | 'viewDigitalCurrency' | 'editDigitalCurrency';
    activeDigitalCurrency?: DigitalCurrencyDTO;
};

export type FormValues = {
    digitalCurrencyId: string;
    details: string;
    counterParty: string;
};

interface DigitalCurrencyDialogProps extends DigitalCurrencyDialogOptions {
  open: boolean;
};

export function DigitalCurrencyDialog(props: DigitalCurrencyDialogProps) {

  const { handleSubmit, control } = useForm<FormValues>({});
  const { close } = useDigitalCurrenciesDialog();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (props.variant === 'addDigitalCurrency') {
      addDigitalCurrency(activeNode!.shortHash, data.counterParty, data.digitalCurrencyId, data.details);
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
        <DialogTitle>New digital currency confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText mb={3}>
            To issue new digital currency to a bank, please enter details below.
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
                label="Quantity"
                type="text"
                fullWidth
                variant="standard"
              />
              )}
              name="digitalCurrencyId"
              control={control}
            />
            <Controller
              render={({ field }) => (
                <TextField
                {...field}
                margin="dense"
                label="Holder"
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
          <Button type={'submit'} >Add Digital Currency</Button>
        </DialogActions>
        </form>
      </Dialog>
  );
}
