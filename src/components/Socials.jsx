import React from "react";
import { motion } from "framer-motion";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";

const Socials = () => {
  return (
    <div className="flex gap-4 md:gap-6 items-center text-3xl md:text-5xl text-purple-400">
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://linkedin.com/in/chamudi-siriwardhane/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <CiLinkedin />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://github.com/heittre"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <FaSquareGithub />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://www.leetcode.com/tcehoyulh0"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <SiLeetcode />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.2 }}
        href="https://www.hackerrank.com/@chamudisiriward1"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        <LiaHackerrank />
      </motion.a>
    </div>
  );
};

export default Socials;
