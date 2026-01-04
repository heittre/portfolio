import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer"

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      {/* Common navbar */}
      <Navbar />
        
      {/* The page-specific content */}
      {children}

      {/* Common footer / contact */}
      <Contact />
      <Footer/>
    </div>
  );
};

export default MainLayout;
