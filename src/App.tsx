import * as React from 'react';
import {Button, Container, Typography} from "@mui/material";
import { VNodeContext } from './components/VNodeContext';
import { OpenAPI } from './services/generatedCordaApi';
import DigitalCurrencyGrid from './components/DigitalCurrencyGrid';
import MortgageGrid from "./components/MortgageGrid";
import BundleGrid from "./components/BundleGrid";
import {useState} from "react";

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

    return (
        <div>
            <VNodeContext>
                <Container maxWidth="md">
                    <Button variant="outlined" onClick={() => setActiveGridView("digitalCurrencyGrid")}>
                        Digital Currency View
                    </Button>
                    <Button variant="outlined" onClick={() => setActiveGridView("mortgageGrid")}>
                        Mortgage View
                    </Button>
                    <Button variant="outlined" onClick={() => setActiveGridView("bundleGrid")}>
                        Bundle View
                    </Button>
                    { activeGridView == "digitalCurrencyGrid" && <DigitalCurrencyGrid /> }
                    { activeGridView == "mortgageGrid" && <MortgageGrid /> }
                    { activeGridView == "bundleGrid" && <BundleGrid /> }
                </Container>
            </VNodeContext>
            <Copyright />
        </div>
    );
};

export default App;
