import React from "react";
import { Box, Grid, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: "20px",
        backgroundColor: "black",
        color: "white",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Top Border */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "90%",
          height: "2px",
          backgroundColor: "white",
          transform: "translateX(-50%)",
        }}
      />
      {/* Bottom Border */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0, // Aligns the border to the bottom
          left: "50%",
          width: "90%",
          height: "2px",
          backgroundColor: "white",
          transform: "translateX(-50%)",
        }}
      />
      {/* Main Content Grid Container */}
      <Grid
        container
        alignItems="center"
        direction="row" // Change to row direction
        justifyContent="flex-end" // Allign items to the right
        sx={{ paddingRight: "7rem" }} // Padding to prevent content from touching the right edge
      >
        {/* Logo Box Grid Item */}
        <Grid item>
          <Box className="footer-logo" />
        </Grid>
        <Grid item>
          {/* Text Grid Container */}
          <Grid
            container
            direction="column" // Stack text items vertically
            alignItems="flex-end" // Align text to the right
          >
            {/* Sacred Genesis Typography Grid Item */}
            <Grid item>
              <Typography variant="body1">©2024 Sacred Genesis</Typography>
            </Grid>
            {/* Terms & Conditions Typography Grid Item */}
            <Grid item sx={{ width: "100%" }}>
              <Typography variant="body2">
                <MuiLink
                  component={Link}
                  to="/terms"
                  color="inherit"
                  underline="none"
                  sx={{
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Terms & Conditions
                </MuiLink>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
