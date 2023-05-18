import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { VNodeContext } from './components/VNodeContext';
import { OpenAPI } from './services/generatedCordaApi';
import DigitalCurrencyGrid from './components/DigitalCurrencyGrid';
import {useState} from "react";
import MortgageGrid from "./components/MortgageGrid";
import {Button} from "@mui/material";

OpenAPI.BASE = process.env.REACT_APP_CORDA_REST_URL!;
OpenAPI.USERNAME = process.env.REACT_APP_CORDA_REST_USER!;
OpenAPI.PASSWORD = process.env.REACT_APP_CORDA_REST_PASSWORD!;

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center" mt={2}>
      {'Copyright © Bundles of Fun '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const App = () => {
    const [activeGridView, setActiveGridView] = useState("digitalCurrencyGrid");

    const handleGridViewSwitch = () => {
        setActiveGridView(activeGridView === 'digitalCurrencyGrid' ? 'mortgageGrid' : 'digitalCurrencyGrid');
    };

    return (
        <div>
            <VNodeContext>
                <Container maxWidth="md">
                    <Button variant="outlined" onClick={ handleGridViewSwitch }>
                        Switch View
                    </Button>
                    {activeGridView === 'digitalCurrencyGrid' ? <DigitalCurrencyGrid /> : <MortgageGrid />}
                </Container>
            </VNodeContext>
            <Copyright />
        </div>
    );
};

export default App;
