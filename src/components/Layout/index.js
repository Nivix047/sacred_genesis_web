import React, { useState } from "react";
import Home from "../pages/Home";
import Header from "../Header";
import Footer from "../Footer";
import { BrowserRouter as Router } from "react-router-dom";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <Router>
      <div>
        <Header currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        <Footer />
      </div>
    </Router>
  );
}
