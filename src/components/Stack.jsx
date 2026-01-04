import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiJavascript, SiMongodb, SiPostman, SiSelenium, SiMysql,SiCypress } from "react-icons/si";

const stack = [
  {
    title: "Frontend",
    items: [
      { icon: FaHtml5, name: "HTML" },
      { icon: FaCss3, name: "CSS" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: FaReact, name: "React" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: FaNodeJs, name: "Node.js" },
      { icon: FaJava, name: "Java" },
      { icon: FaPython, name: "Python" },
    ],
  },
  {
    title: "Databases",
    items: [
      { icon: SiMongodb, name: "MongoDB" },
      { icon: SiMysql, name: "SQL" },
    ],
  },
  {
    title: "Testing & Tools",
    items: [
      { icon: SiSelenium, name: "Selenium" },
      { icon: SiPostman, name: "Postman" },
      { icon: SiCypress, name: "Cypress" },
    ],
  },
];

function TechStack() {
  return (
    <section id="techstack" className="max-w-[1000px] mx-auto mt-8 md:mt-12">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl md:text-4xl font-bold text-gray-200 text-center mb-10">
        Tech Stack
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {stack.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border border-white/10 rounded-xl p-6 bg-white/5"
          >
            <h3 className="text-purple-400 text-lg font-semibold mb-6">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 gap-5">
              {group.items.map(({ icon: Icon, name }) => (
                <div
                  key={name}
                  className="flex items-center gap-4
                             bg-black/20 border border-white/5
                             rounded-lg px-4 py-3
                             hover:border-purple-400/40 transition"
                >
                  <Icon className="text-xl text-gray-300" />
                  <span className="text-gray-300 text-sm">{name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;
