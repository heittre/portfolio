import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  const toggleNav = () => setNav(!nav);
  const toggleMobileProjects = () => setMobileProjectsOpen(!mobileProjectsOpen);

  return (
    <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-xl z-50 border-b border-white/5">
      <nav className="max-w-[1300px] mx-auto flex justify-between items-center px-8 md:px-12 h-20 text-gray-300">

        {/* Logo */}
        <RouterLink
          to="/home"
          className="text-lg font-semibold tracking-wide hover:text-purple-400 transition-colors"
        >
          Chamudi Siriwardhane
        </RouterLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center text-sm font-medium">

          {/* About */}
          <li className="relative group">
            <ScrollLink to="about" smooth offset={50} duration={500}>
              <span className="hover:text-purple-400 transition-colors">
                About
              </span>
            </ScrollLink>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full" />
          </li>
          <li className="relative group">
            <ScrollLink to="techstack" smooth offset={50} duration={500}>
              <span className="hover:text-purple-400 transition-colors">
                Tech Stack
              </span>
            </ScrollLink>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full" />
          </li>

          {/* Projects Dropdown */}
        <li
  className="relative group"
  onMouseEnter={() => setProjectsOpen(true)}
  onMouseLeave={() => setProjectsOpen(false)}
>
  <span className="cursor-pointer flex items-center gap-1 hover:text-purple-400 transition-colors">
    Projects
    <span className="text-xs">▾</span>
  </span>

  <AnimatePresence>
    {projectsOpen && (
      <motion.ul
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 8 }}
        transition={{ duration: 0.15 }}
        className="absolute left-0 mt-3 w-52 rounded-xl bg-black/90 backdrop-blur-xl shadow-xl border border-white/10 overflow-hidden"
      >
        {[
          { label: "Full Stack", to: "/full-stack" },
          { label: "Testing", to: "/testing" },
          { label: "Data Science", to: "/ml" },
          { label: "Other", to: "/miscellaneous" },
        ].map((item) => (
          <li key={item.to}>
            <RouterLink
              to={item.to}
              className="block px-5 py-3 text-sm hover:bg-purple-500 hover:text-black transition-colors"
              onClick={() => setProjectsOpen(false)}
            >
              {item.label}
            </RouterLink>
          </li>
        ))}
      </motion.ul>
    )}
  </AnimatePresence>
</li>


          {/* Contact */}
          <li className="relative group">
            <ScrollLink to="contact" smooth offset={50} duration={500}>
              <span className="hover:text-purple-400 transition-colors">
                Contact
              </span>
            </ScrollLink>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full" />
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <div onClick={toggleNav} className="md:hidden z-50 cursor-pointer">
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
            >
              <ul className="flex flex-col items-center gap-10 mt-32 text-3xl font-semibold">

                <li>
                  <ScrollLink to="about" smooth offset={50} duration={500} onClick={toggleNav}>
                    About
                  </ScrollLink>
                </li>
                <li>
                  <ScrollLink to="techstack" smooth offset={50} duration={500} onClick={toggleNav}>
                    Tech Stack
                  </ScrollLink>
                </li>

                {/* Mobile Projects */}
                <li className="text-center">
                  <button
                    onClick={toggleMobileProjects}
                    className="flex items-center gap-2"
                  >
                    Projects <span className="text-xl">▾</span>
                  </button>

                  {mobileProjectsOpen && (
                    <ul className="mt-6 space-y-4 text-xl text-gray-400">
                      <li>
                        <RouterLink to="/full-stack" onClick={toggleNav} className="hover:text-purple-400">
                          Full Stack
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/testing" onClick={toggleNav} className="hover:text-purple-400">
                          Testing
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/ml" onClick={toggleNav} className="hover:text-purple-400">
                          Data Science
                        </RouterLink>
                      </li>
                      <li>
                        <RouterLink to="/miscellaneous" onClick={toggleNav} className="hover:text-purple-400">
                        Other
                        </RouterLink>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <ScrollLink to="contact" smooth offset={50} duration={500} onClick={toggleNav}>
                    Contact
                  </ScrollLink>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

export default Navbar;
