import React from "react";
import { Box, Grid, Typography, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Box component="footer" className="footer-container" sx={{ width: "100%" }}>
      <Grid container alignItems="center" className="footer-grid">
        <Grid item xs={12} className="footer-content">
          {/* Empty Box used to push content to the right */}
          <Box flexGrow={1}></Box>
          <Box className="footer-logo-box">
            <div className="footer-logo"></div> {/* Logo */}
          </Box>
          <Box className="footer-links-box">
            <Typography variant="body2" className="company-name">
              ©2024 Sacred Genesis
            </Typography>
            <Typography variant="body2" className="footer-link-item">
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
                Sacred Genesis Terms & Conditions
              </MuiLink>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

// import React from "react";
// import { Box, Grid, Typography, Link } from "@mui/material";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{ backgroundColor: "black", color: "white", padding: "20px 0" }}
//     >
//       <Grid container justifyContent="space-between" alignItems="center" px={3}>
//         <Grid item>
//           <Typography variant="body1">© 2023 Sacred Genesis LLC</Typography>
//         </Grid>
//         <Grid item>
//           <Link
//             href="/terms"
//             color="inherit"
//             underline="hover"
//             sx={{ marginRight: 2 }}
//           >
//             Terms & Conditions
//           </Link>
//           <Link href="/privacy" color="inherit" underline="hover">
//             Privacy Policy
//           </Link>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

export default Footer;
