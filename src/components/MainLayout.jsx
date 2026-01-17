import React from "react";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer"

const MainLayout = ({ children }) => {
  return (
    <div className="relative">
      {/* Common navbar */}
      <Navbar />
      
      {/* Content padded to clear fixed navbar (h-20 = 80px) */}
      <main className="pt-20">
        {/* The page-specific content */}
        {children}

        {/* Common footer / contact */}
        <Contact />
        <Footer/>
      </main>
    </div>
  );
};

export default MainLayout;
