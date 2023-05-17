import React, { PropsWithChildren, createContext, useContext, useState } from "react";
import { MortgageDialog, MortgageDialogOptions } from "./MortgageDialog";

interface MortgageDialogContext {
    openDialog: (dialogProps: MortgageDialogOptions) => void
    close: () => void
}

const DialogContext = createContext<MortgageDialogContext>({
    openDialog: (dialogProps) => {}, 
    close: () => {},
});

export const useMortgageDialog = () => useContext(DialogContext);

export const MortgageDialogProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<MortgageDialogOptions>({});

  const openDialogHandler = (options: MortgageDialogOptions) => {
    setOptions(options)
    setOpen(true)
  }
  const closeHandler = () => setOpen(false);

  const provider: MortgageDialogContext = {
    openDialog: openDialogHandler,
    close: closeHandler
  }

  return (
    <DialogContext.Provider value={ provider }>
        {children}
        <MortgageDialog open={open} {...options} />
    </DialogContext.Provider>
  );
}
