import React from "react";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "../components/ShinyEffect";
import { motion } from "framer-motion";
// import profilepic from "../assets/profilePic.jpg"
import profilepic from "../assets/pro_pic2.png";
import { FaHtml5 } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { LiaHackerrank } from "react-icons/lia";
import Interests from "../components/Interests";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import MainLayout from "../components/MainLayout";
import DownloadCVButton from "./DownloadCVButton";
import cv from '../assets/qe_cv_13.pdf'
import Socials from "./Socials";

const About = () => {
    return (
        <div>
        <section id="about" className="mb-16 md:mb-20 scroll-mt-20">
        <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

            {/* ===== LEFT: TEXT ===== */}
            <motion.div
                initial={{ opacity: 0, y: -40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center md:text-left"
            >
               <div className="border-l-2 border-purple-500 pl-3 md:pl-4 mb-4 w-full">
  <p className="text-white italic text-base sm:text-lg md:text-xl leading-relaxed break-words">
    "Quality is not an act, it is a habit."
    <span className="block mt-2 text-sm sm:text-base text-gray-300 not-italic">
      — Aristotle
    </span>
  </p>
</div>


                <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-gray-200 text-4xl md:text-6xl font-bold leading-tight mb-6"
                >
                HEY, I AM <br />
                <span className="text-purple-500">CHAMUDI SIRIWARDHANE</span>
                </motion.h1>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-gray-300 text-base md:text-xl max-w-[520px] mx-auto md:mx-0 mb-8"
                >
                I am an undergraduate seeking opportunities to improve my skills and
                apply knowledge to solve practical problems.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.9 }}
                className="flex flex-wrap justify-center md:justify-start items-center gap-6"
                >
                <DownloadCVButton cv={cv}/>
                <Socials />
                </motion.div>
            </motion.div>

            {/* ===== RIGHT: IMAGE ===== */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex justify-center md:justify-end"
            >
                <img
                src={profilepic}
                alt="Profile"
                className="
                    w-[260px]
                    sm:w-[320px]
                    md:w-[380px]
                    lg:w-[420px]
                    object-contain
                "
                />
            </motion.div>

            </div>
        </div>
        </section>

        </div>
    );
};

export default About;