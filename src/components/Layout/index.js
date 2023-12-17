import React, { useState } from "react";
import Home from "../pages/Home";

export default function Layout() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
  };
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <div currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
