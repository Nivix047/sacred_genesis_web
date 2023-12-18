import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import "./Home.css";

const Home = () => {
  return (
    <div id="home-background-parent">
      <div className="home-background"></div>
      <div className="content-section">
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6} className="left-content" fontSize={25}>
            <h1 id="welcome-message-title">Relax, browse and collect</h1>
            <p id="welcome-message">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Grid>
          <Grid item xs={12} md={6} className="right-content">
            <div className="button-group">
              <Button
                variant="contained"
                color="primary"
                className="styled-button"
                id="purchase-relics-btn"
                style={{ padding: "15px 30px" }}
              >
                PURCHASE RELICS
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="styled-button"
                id="gallery-btn"
                style={{ padding: "15px 30px" }}
              >
                GALLERY
              </Button>
              <Button
                variant="contained"
                color="primary"
                className="styled-button"
                id="analytics-btn"
                style={{ padding: "15px 30px" }}
              >
                ANALYTICS <br />
                (In developement)
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
