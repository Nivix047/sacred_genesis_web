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
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (path) => {
    setAnchorEl(null);
    navigate(path); // Use React Router's navigate function to change the route
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black", color: "white" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          SACRED GENESIS
        </Typography>
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
              <MenuItem onClick={() => handleClose("/")}>HOME</MenuItem>
              <MenuItem onClick={() => handleClose("/relics")}>
                PURCHASE NFTs
              </MenuItem>
              <MenuItem onClick={() => handleClose("/gallery")}>
                GALLERY
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
          <Box sx={{ display: "flex" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                ".MuiTab-root": {},
                ".MuiTabs-indicator": {
                  backgroundColor: "#7f6a93", // Indicator color
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
                component={Link}
                to="/relics"
                label="PURCHASE NFTs"
                style={{ color: "white" }}
              />
              <Tab
                component={Link}
                to="/gallery"
                label="GALLERY"
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
                    style={{ color: "white", "&:visited": { color: "white" } }} // Add this line
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
