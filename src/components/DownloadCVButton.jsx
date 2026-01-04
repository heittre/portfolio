import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";


const DownloadCVButton = ({ cv }) => {
  return (
    <div className="flex justify-center my-8">
      <motion.a
        href={cv}
        download="chamudi_siriwardhane_resume.pdf"
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.4)" }}
        whileTap={{ scale: 0.97 }}
        className="inline-flex items-center gap-2 px-8 py-4 font-semibold text-purple-400 
                   border border-purple-400 rounded-2xl transition-colors duration-300 
                   hover:bg-purple-400 hover:text-black text-lg md:text-xl"
      >
    <FaDownload /> Download CV

      </motion.a>
    </div>
  );
};

export default DownloadCVButton;
