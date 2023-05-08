import React, { useContext } from 'react';
import { TradeDialog } from './TradeDialog';
import TradeGrid from './TradeGrid';
import { VDataContext } from './VNodeContext';
import { Box } from '@mui/material';

export function TradeContainer() {

    const { vNode, } = useContext(VDataContext);
    
    // only show trading interface if vNode is selected
    if (vNode == null) return null;

    return (
        <Box mt={2} >
            <TradeDialog variant="addTrade" />
            <TradeGrid />
        </Box>
    )
};