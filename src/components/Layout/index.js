import React from "react";
import Home from "../pages/Home";
import Header from "../Header";
import Footer from "../Footer";
import Contact from "../pages/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function Layout() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
