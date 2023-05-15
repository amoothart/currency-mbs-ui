import React, { PropsWithChildren, createContext, useContext, useState } from "react";
import { DigitalCurrencyDialog, DigitalCurrencyDialogOptions } from "./DigitalCurrencyDialog";

interface DigitalCurrencyDialogContext {
    openDialog: (dialogProps: DigitalCurrencyDialogOptions) => void
    close: () => void
}

const DialogContext = createContext<DigitalCurrencyDialogContext>({
    openDialog: (dialogProps) => {}, 
    close: () => {},
});

export const useDigitalCurrenciesDialog = () => useContext(DialogContext);

export const DigitalCurrenciesDialogProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<DigitalCurrencyDialogOptions>({});

  const openDialogHandler = (options: DigitalCurrencyDialogOptions) => {
    setOptions(options)
    setOpen(true)
  }
  const closeHandler = () => setOpen(false);

  const provider: DigitalCurrencyDialogContext = {
    openDialog: openDialogHandler,
    close: closeHandler
  }

  return (
    <DialogContext.Provider value={ provider }>
        {children}
        <DigitalCurrencyDialog open={open} {...options} />
    </DialogContext.Provider>
  );
}
