import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import NodeSelector from './components/VNodeSelector';
import { VNodeContext } from './components/VNodeContext';
import { ShortNodeInfo } from './services/niceCordaApi/getVnodes';
import { OpenAPI } from './services/generatedCordaApi';
import { TradeContainer } from './components/TradeContainer';

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

  const [vNode, setvNode] = React.useState<ShortNodeInfo | null>(null);

  return (
    <Container maxWidth="md">
      <VNodeContext>
        <TradeContainer />
      </VNodeContext>
      <Copyright />
    </Container>
  );
}
