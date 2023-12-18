import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./Header.css";

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="header-container">
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ border: "1px solid black" }}>
          <h1 className="header-title">SACRED GENESIS</h1>
        </Grid>
        <Grid
          item
          xs={6}
          style={{
            border: "1px solid black",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="header-tabs"
            >
              <Tab label="PURCHASE RELICS" />
              <Tab label="GALLERY" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
