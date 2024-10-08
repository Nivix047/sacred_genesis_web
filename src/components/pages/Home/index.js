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

  // Media query styles for specific screen size (844x390)
  const specialScreenSizeStyles = {
    "@media screen and (max-width: 844px) and (max-height: 390px)": {
      width: "20vw", // Adjust width for specific screen size
      height: "20vw", // Adjust height for specific screen size
    },
  };

  // Styles for the typography to maintain a consistent appearance
  const typographyStyle = {
    fontSize: "20px",
    color: "white",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: "10px 0", // Adjusted padding to maintain thin strip appearance
    width: "100%", // Ensure the background spans the full width of the box
    position: "absolute", // Position the typography absolutely within the box
    top: "50%", // Vertically center
    left: "50%", // Horizontally center
    transform: "translate(-50%, -50%)", // Adjust for perfect centering
  };

  return (
    <Box>
      {/* Background Image */}
      <Box className="home-background"></Box>
      {/* Main Content Container */}
      <Box sx={{ paddingTop: 4, paddingBottom: 4 }}>
        <Container maxWidth>
          {/* Grid Container */}
          <Grid container alignItems="center" spacing={2}>
            {/* Left Text Block */}
            <Grid item xs={12} md={6}>
              <Box sx={{ marginY: 2 }}>
                {/* Main Heading */}
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ mt: 2, px: 2, color: "white" }}
                >
                  Relax, browse and collect
                </Typography>

                {/* Description Text */}
                <Typography
                  variant="body1"
                  sx={{
                    px: 2,
                    color: "white",
                    fontSize: "20px",
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
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {/* Web Weaver Artistry Collection Image */}
                <Box
                  className="wwac"
                  sx={{
                    cursor: "pointer",
                    width: "25vh",
                    height: "25vh",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    borderRadius: "30px",
                    transition: "transform 0.3s, border 0.3s",
                    ":hover": {
                      transform: "scale(1.1)",
                    },
                    position: "relative",
                    ...specialScreenSizeStyles,
                  }}
                  onClick={() =>
                    navigateToURL(
                      "https://opensea.io/collection/web-weaver-artistry-collection"
                    )
                  }
                >
                  <Typography variant="subtitle1" sx={typographyStyle}>
                    Web Weaver Artistry Collection
                  </Typography>
                </Box>

                {/* Prayers of Gratitude Collection Image */}
                <Box
                  className="pogc"
                  sx={{
                    cursor: "pointer",
                    width: "25vh",
                    height: "25vh",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    borderRadius: "30px",
                    transition: "transform 0.3s, border 0.3s",
                    ":hover": {
                      transform: "scale(1.1)",
                    },
                    position: "relative",
                    ...specialScreenSizeStyles,
                  }}
                  onClick={() =>
                    navigateToURL(
                      "https://opensea.io/collection/prayers-of-gratitude-collection"
                    )
                  }
                >
                  <Typography variant="subtitle1" sx={typographyStyle}>
                    Prayers of Gratitude Collection
                  </Typography>
                </Box>

                {/* Contact Us Image */}
                <Box
                  className="contact"
                  sx={{
                    cursor: "pointer",
                    width: "25vh",
                    height: "25vh",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "auto",
                    borderRadius: "30px",
                    transition: "transform 0.3s, border 0.3s",
                    ":hover": {
                      transform: "scale(1.1)",
                    },
                    position: "relative",
                    ...specialScreenSizeStyles,
                  }}
                  onClick={handleContactClick}
                >
                  <Typography variant="subtitle1" sx={typographyStyle}>
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
