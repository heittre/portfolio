import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

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
        <a
          href="/home"
          className="text-lg font-semibold tracking-wide hover:text-purple-400 transition-colors"
        >
          Chamudi Siriwardhane
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 items-center text-sm font-medium">

          {/* About */}
          <li className="relative group">
            <Link to="about" smooth offset={50} duration={500}>
              <span className="hover:text-purple-400 transition-colors">
                About
              </span>
            </Link>
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-400 transition-all group-hover:w-full" />
          </li>
          <li className="relative group">
            <Link to="techstack" smooth offset={50} duration={500}>
              <span className="hover:text-purple-400 transition-colors">
                Tech Stack
              </span>
            </Link>
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
                    { label: "Full Stack", href: "/full-stack" },
                    { label: "Testing", href: "/testing" },
                    { label: "Data Science", href: "/data-science" },
                    { label: "Other", href: "/miscellaneous" },
                  ].map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block px-5 py-3 text-sm hover:bg-purple-500 hover:text-black transition-colors"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Contact */}
          <li className="relative group">
            <Link to="contact" smooth offset={50} duration={500}>
              <span className="hover:text-purple-400 transition-colors">
                Contact
              </span>
            </Link>
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
                  <Link to="about" smooth offset={50} duration={500} onClick={toggleNav}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="techstack" smooth offset={50} duration={500} onClick={toggleNav}>
                    Tech Stack
                  </Link>
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
                        <a href="/full-stack" onClick={toggleNav} className="hover:text-purple-400">
                          Full Stack
                        </a>
                      </li>
                      <li>
                        <a href="/testing" onClick={toggleNav} className="hover:text-purple-400">
                          Testing
                        </a>
                      </li>
                      <li>
                        <a href="/ml" onClick={toggleNav} className="hover:text-purple-400">
                          Data Science
                        </a>
                      </li>
                      <li>
                        <a href="/miscellaneous" onClick={toggleNav} className="hover:text-purple-400">
                        Other
                        </a>
                      </li>
                    </ul>
                  )}
                </li>

                <li>
                  <Link to="contact" smooth offset={50} duration={500} onClick={toggleNav}>
                    Contact
                  </Link>
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
