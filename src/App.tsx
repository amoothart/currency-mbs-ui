import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { VNodeContext } from './components/VNodeContext';
import { OpenAPI } from './services/generatedCordaApi';
import { TradeDialogProvider } from './components/TradeDialogProvider';
import TradeGrid from './components/TradeGrid';

OpenAPI.BASE = process.env.REACT_APP_CORDA_REST_URL!;
OpenAPI.USERNAME = process.env.REACT_APP_CORDA_REST_USER!;
OpenAPI.PASSWORD = process.env.REACT_APP_CORDA_REST_PASSWORD!;

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" mt={2}>
      {'Copyright © Nils '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {

  return (
    <Container maxWidth="md">
      <VNodeContext>
        <TradeDialogProvider>
          <TradeGrid />
        </TradeDialogProvider>
      </VNodeContext>
      <Copyright />
    </Container>
  );
}
