import React from "react";
import Home from "../pages/Home";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Contact from "../pages/Contact";
import Terms from "../pages/Terms";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Layout() {
  return (
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
  );
}
