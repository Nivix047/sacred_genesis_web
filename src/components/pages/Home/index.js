import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Button, Box, Typography, Container } from "@mui/material";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const WWACurl =
    "https://opensea.io/collection/web-weaver-artistry-collection";

  const POGCurl =
    "https://opensea.io/collection/prayers-of-gratitude-collection";

  const handleContactClick = () => {
    navigate("/contact");
  };

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
                  sx={{ mt: 2, px: { xs: 2, sm: 2 }, color: "white" }}
                >
                  Relax, browse and collect
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    px: { xs: 2, sm: 2 },
                    color: "white",
                    fontSize: "18px",
                  }}
                >
                  Dear fellow travelers on the pixelated pilgrimage, welcome to
                  Sacred Genesis. Here, we offer not just NFTs, but existential
                  pixel-punches to the gut, each artfully crafted by the AI
                  brilliance of DALL-E 2. Brace yourself to confront your demons
                  in this grunge-meets-pixel art odyssey. Relax, browse, and
                  remember: in the vast expanse of the digital void, we're all
                  just intriguing glitches in search of meaning. But hey, at
                  least we have these awesome NFTs, right?
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
                <a
                  href={WWACurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className="styled-button"
                    id="purchase-nft-btn"
                    sx={{
                      fontSize: "15px",
                      textTransform: "none",
                      background: "linear-gradient(180deg, #4a4a4a, #000000)",
                      padding: "15px 30px",
                      width: 200,
                      borderColor: "white",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      backgroundColor: "#5f5f5f", // Normal state background
                      ":hover": {
                        background: "linear-gradient(180deg, #5f5f5f, #0a0a0a)", // Darker gradient on hover
                        borderColor: "white", // Keep the border color for the hover state if you want
                      },
                    }}
                  >
                    Web Weaver Artistry Collection
                  </Button>
                </a>
                <a
                  href={POGCurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    className="styled-button"
                    id="purchase-nft-btn"
                    sx={{
                      fontSize: "14px",
                      textTransform: "none",
                      background: "linear-gradient(180deg, #4a4a4a, #000000)",
                      padding: "15px 30px",
                      width: 200,
                      borderColor: "white",
                      borderWidth: "1px",
                      borderStyle: "solid",
                      backgroundColor: "#5f5f5f", // Normal state background
                      ":hover": {
                        background: "linear-gradient(180deg, #5f5f5f, #0a0a0a)", // Darker gradient on hover
                        borderColor: "white", // Keep the border color for the hover state if you want
                      },
                    }}
                  >
                    Prayers of Gratitude Collection
                  </Button>
                </a>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleContactClick}
                  sx={{
                    fontSize: "20px",
                    textTransform: "none",
                    background: "linear-gradient(180deg, #4a4a4a, #000000)",
                    width: 200,
                    padding: "15px 30px",
                    borderColor: "white",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    backgroundColor: "#5f5f5f", // Normal state background
                    ":hover": {
                      background: "linear-gradient(180deg, #5f5f5f, #0a0a0a)", // Darker gradient on hover
                      borderColor: "white", // Keep the border color for the hover state if you want
                    },
                  }}
                >
                  Contact Us
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
