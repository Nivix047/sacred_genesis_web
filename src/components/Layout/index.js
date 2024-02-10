import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Home from "../pages/Home";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

const theme = createTheme({
  typography: {
    fontFamily: '"Inconsolata", monospace',
  },
});

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}
