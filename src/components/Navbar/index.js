import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TwitterIcon from "@mui/icons-material/Twitter";

const Navbar = () => {
  // State for managing the menu anchor and tab value
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  // Theme and media query for responsive design
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Hooks for navigation and location
  const navigate = useNavigate();
  const location = useLocation();

  // External URL for the 'PURCHASE NFTs' link
  const openseaUrl = "https://opensea.io/Sacred-Genesis";

  // Update the tab value based on the current route
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setValue(0);
        break;
      case "/contact":
        setValue(2);
        break;
      // Add more cases if you have more routes
      default:
        setValue(false);
    }
  }, [location.pathname]);

  // Handler for opening the menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handler for closing the menu and navigating
  const handleClose = (path) => {
    setAnchorEl(null);
    if (path) navigate(path);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black", color: "white" }}>
      <Toolbar>
        {/* Site title */}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          SACRED GENESIS
        </Typography>

        {/* Conditional rendering for Mobile and Desktop views */}
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorEl)}
              onClose={() => handleClose(null)}
            >
              {/* Menu items for mobile view */}
              <MenuItem onClick={() => handleClose("/")}>HOME</MenuItem>
              <MenuItem onClick={() => handleClose()}>
                <a
                  href={openseaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  PURCHASE NFTs
                </a>
              </MenuItem>
              <MenuItem onClick={() => handleClose("/contact")}>
                CONTACT
              </MenuItem>
              <MenuItem>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <TwitterIcon style={{ marginRight: "10px" }} />
                  TWITTER
                </a>
              </MenuItem>
            </Menu>
          </>
        ) : (
          // Desktop view with tabs
          <Box sx={{ display: "flex" }}>
            <Tabs
              value={value}
              aria-label="basic tabs example"
              sx={{
                ".MuiTab-root": {},
                ".MuiTabs-indicator": {
                  backgroundColor: "white",
                },
              }}
            >
              <Tab
                component={Link}
                to="/"
                label="HOME"
                style={{ color: "white" }}
              />
              <Tab
                component="a"
                href={openseaUrl}
                target="_blank"
                label="PURCHASE NFTs"
                style={{ color: "white" }}
              />
              <Tab
                component={Link}
                to="/contact"
                label="CONTACT"
                style={{ color: "white" }}
              />
              <Tab
                icon={
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "white" }}
                  >
                    <TwitterIcon />
                  </a>
                }
                style={{ color: "white" }}
              />
            </Tabs>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
