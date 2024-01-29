import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Box, Typography, Container } from "@mui/material";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  // Function to open external URL
  const navigateToURL = (url) => {
    window.open(url, "_blank");
  };

  // Function to navigate to the contact page
  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <Box id="home-background-parent" sx={{ backgroundColor: "black" }}>
      {/* Background Image */}
      <Box className="home-background"></Box>

      {/* Main Content Container */}
      <Box sx={{ paddingTop: 8, paddingBottom: 8 }}>
        <Container maxWidth="lg">
          {/* Grid Container */}
          <Grid container alignItems="center" spacing={2}>
            {/* Left Text Block */}
            <Grid item xs={12} md={6}>
              <Box sx={{ marginY: 2 }}>
                {/* Main Heading */}
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ mt: 2, px: { xs: 2, sm: 2 }, color: "white" }}
                >
                  Relax, browse and collect
                </Typography>

                {/* Description Text */}
                <Typography
                  variant="body1"
                  sx={{
                    px: { xs: 2, sm: 2 },
                    color: "white",
                    fontSize: "25px",
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

            {/* Right Image Links Block */}
            <Grid item xs={12} sm={6} md={6}>
              <Box
                sx={{
                  display: "flex",
                  gap: 4,
                  mt: -2,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {/* Web Weaver Artistry Collection Image */}
                <Box
                  className="wwac"
                  sx={{
                    cursor: "pointer",
                    width: "30vh",
                    height: "30vh",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    borderRadius: "30px",
                  }}
                  onClick={() =>
                    navigateToURL(
                      "https://opensea.io/collection/web-weaver-artistry-collection"
                    )
                  }
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "20px",
                      color: "white",
                      textAlign: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      p: 1,
                      width: "100%",
                    }}
                  >
                    Web Weaver Artistry Collection
                  </Typography>
                </Box>

                {/* Prayers of Gratitude Collection Image */}
                <Box
                  className="pogc"
                  sx={{
                    cursor: "pointer",
                    width: "30vh",
                    height: "30vh",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    borderRadius: "30px",
                  }}
                  onClick={() =>
                    navigateToURL(
                      "https://opensea.io/collection/prayers-of-gratitude-collection"
                    )
                  }
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "20px",
                      color: "white",
                      textAlign: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      p: 1,
                      width: "100%",
                    }}
                  >
                    Prayers of Gratitude Collection
                  </Typography>
                </Box>

                {/* Contact Us Image */}
                <Box
                  className="contact"
                  sx={{
                    cursor: "pointer",
                    width: "30vh",
                    height: "30vh",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    borderRadius: "30px",
                  }}
                  onClick={handleContactClick}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "20px",
                      color: "white",
                      textAlign: "center",
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      p: 1,
                      width: "100%",
                    }}
                  >
                    Contact Us
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
