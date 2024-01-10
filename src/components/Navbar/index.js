import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  // State hooks for tab value and anchor element for menu
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  // Material-UI theme and media query for responsive design
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // Navigation hook from react-router-dom
  const navigate = useNavigate();

  // Handler for changing tabs
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // Handler for opening the menu
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handler for closing the menu and navigating
  const handleClose = (path) => {
    setAnchorEl(null);
    navigate(path);
  };

  const openseaUrl = "https://opensea.io/Sacred-Genesis";

  return (
    // AppBar component for the top navigation bar
    <AppBar position="static" sx={{ backgroundColor: "black", color: "white" }}>
      <Toolbar>
        {/* Site title */}
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          SACRED GENESIS
        </Typography>

        {/* Mobile view with hamburger menu */}
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
              onClose={() => handleClose("")}
            >
              {/* Menu items */}
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
                {/* Twitter link */}
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
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                ".MuiTab-root": {},
                ".MuiTabs-indicator": {
                  backgroundColor: "white",
                },
              }}
            >
              {/* Tab items */}
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
