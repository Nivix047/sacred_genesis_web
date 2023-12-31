import React from "react";
import { Grid, Button, Box, Typography, Container } from "@mui/material";
import "./Home.css";

const Home = () => {
  return (
    <Box id="home-background-parent" sx={{ backgroundColor: "black" }}>
      <Box className="home-background"></Box>
      <Box sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Container maxWidth="lg">
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ marginY: 2 }}>
                {" "}
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ mt: 2, px: { xs: 2, sm: 8 }, color: "white" }}
                >
                  Relax, browse and collect
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ px: { xs: 2, sm: 8 }, color: "white" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna
                  aliqua...
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                className="button-group"
                sx={{
                  display: "flex",
                  gap: 4,
                  mt: -2,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: 200, bgcolor: "#5f5f5f" }}
                >
                  PURCHASE NFTS
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: 200, bgcolor: "#5f5f5f" }}
                >
                  GALLERY
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ width: 200, bgcolor: "#5f5f5f" }}
                >
                  CONTACT ME
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
