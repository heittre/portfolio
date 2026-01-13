import React from "react";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "../components/ShinyEffect";
import { motion } from "framer-motion";
// import profilepic from "../assets/profilePic.jpg"
import profilepic from "../assets/portofolio_image.png";
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
import About from "../components/About";
import Experience from "../components/Experience";
import TechStack from "../components/Stack";

const Home = () => {
  return (
    <MainLayout>
<div className="mx-6 mt-16 max-w-[1200px] mx-auto relative space-y-20">
    <About/>
      {/* another motion div to include the tech stack comes here */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewPort={{ once: true }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24 "
      >
       <TechStack/>
      </motion.div>
          <Experience/>

        {/* ================= INTERESTS SECTION ================= */}
<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-32 mb-32"
>
  {/* Section Title */}
  <h2 className="text-4xl md:text-5xl font-bold text-gray-200 text-center mb-20">
    Project Areas
  </h2>

  {/* Interests Cards */}
  <div className="space-y-24">
    <Interests
      path="/full-stack"
      titleSequence={["Full Stack Development", 2000]}
      description="Building scalable end-to-end web applications."
    />

    <Interests
      path="/testing"
      titleSequence={["Testing & Automation", 2000]}
      description="Automation frameworks, CI/CD and quality assurance."
    />

    <Interests
      path="/ml"
      titleSequence={["Data Science & Machine Learning", 2000]}
      description="ML models, data analysis and intelligent systems."
    />
  </div>
</motion.section>
          
     <div className="absolute inset-0 hidden md:block pointer-events-none -z-10">
      <ShinyEffect left={0} top={0} size={1400} />
    </div>
    </div>
    </MainLayout>
  );
};

export default Home;
