import React, { PropsWithChildren, createContext, useContext, useState } from "react";
import { TradeDialog, TradeDialogOptions } from "./TradeDialog";

interface TradeDialogContext {
    openDialog: (dialogProps: TradeDialogOptions) => void
    close: () => void
}

const DialogContext = createContext<TradeDialogContext>({
    openDialog: (dialogProps) => {}, 
    close: () => {},
});

export const useTradeDialog = () => useContext(DialogContext);

export const TradeDialogProvider: React.FunctionComponent<PropsWithChildren> = ({ children }) => {

  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState<TradeDialogOptions>({});

  const openDialogHandler = (options: TradeDialogOptions) => {
    setOptions(options)
    setOpen(true)
  }
  const closeHandler = () => setOpen(false);

  const provider: TradeDialogContext = {
    openDialog: openDialogHandler,
    close: closeHandler
  }

  return (
    <DialogContext.Provider value={ provider }>
        {children}
        <TradeDialog open={open} {...options} />
    </DialogContext.Provider>
  );
}