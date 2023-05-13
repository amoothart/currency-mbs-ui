import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { useVnodeContext } from "./VNodeContext";
import { ShortNodeInfo, getVnodes } from "../services/niceCordaApi";
import Button from "@mui/material/Button";

export default function NodeSelector() {

  const { activeNode, setActiveNode, nodes } = useVnodeContext();

  const vNodeMenuItems = nodes.map( it =>
    <MenuItem key={it.shortHash} value={it.shortHash}>{it.x500Name.split(',').shift()}, App: {it.cpiName}</MenuItem>
  );

  const handleNodeChange = (event: SelectChangeEvent) => {
    setActiveNode(
      nodes.find( node => node.shortHash == event.target.value)!
    );
  };

  const handleResetButton = () => setActiveNode(null);

  if (activeNode) return ( // vNode is selected, show active node and reset button
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: 'center',
        }}
      >
        <Typography variant="body1" color="text.secondary">
          Connected as {activeNode.x500Name}
        </Typography>
        <Button onClick={handleResetButton} sx={{ml: 1}}>Change</Button>
      </Box>
  );

  
  return ( // vNode is not selected, show selection menu
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 4,
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Select your virtual Node
        </Typography>
        <Box sx={{ minWidth: 250, mt: 2 }}>
        <FormControl fullWidth>
            <InputLabel id="vnode-select-label">vNode</InputLabel>
            <Select
                labelId="vnode-select-label"
                id="vnode-select"
                defaultValue=""
                label="vNode"
                onChange={handleNodeChange}
            >
                {vNodeMenuItems}
            </Select>
        </FormControl>
        </Box>
      </Box>
    </Container>
  );
};