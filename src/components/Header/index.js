import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Header = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={6} style={{ border: "1px solid black" }}>
          <div>Left Side Content</div>
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
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
