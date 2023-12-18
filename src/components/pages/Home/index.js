import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button"; // Import Button if you plan to use MUI buttons
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="home-background"></div>{" "}
      {/* This is your background image */}
      <div className="content-section">
        {" "}
        {/* Add this wrapper div */}
        <Grid container spacing={2}>
          <Grid item xs={6} style={{ border: "1px solid black" }}>
            <div className="left-content">
              <p>
                Relax, browse and collect Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </Grid>
          <Grid item xs={6} style={{ border: "1px solid black" }}>
            <div className="right-content">
              <Button variant="contained" color="primary">
                Button 1
              </Button>
              <Button variant="contained" color="primary">
                Button 2
              </Button>
              <Button variant="contained" color="primary">
                Button 3
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
