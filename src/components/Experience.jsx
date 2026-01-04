import React from "react";
import { motion } from "framer-motion";
import aieseclogo from "../assets/aiesec_logo.png";
import entgralogo from "../assets/entgra_logo.jpg";
import Reveal from "./Reveal";

const experiences = [
  {
    company: "Entgra.io",
    period: "2024 Nov - 2025 May",
    position: "Software Engineering Intern",
    description:
      "As a Software Engineer Intern at Entgra, I automated workflows, contributed to API development, resolved critical bugs, and participated in product design. I gained hands-on experience across the full development lifecycle with exposure to both frontend and backend development, and strengthened my Linux proficiency.",
    logo: entgralogo,
  },
  {
    company: "AIESEC Sri Lanka Dev Team",
    period: "2024 August - Present",
    position: "Software Engineer",
    description:
      "As a developer in AIESEC Sri Lanka, I delivered impactful solutions including UTM tracking integration for analytics-driven decisions and the design and development of an intuitive signup page focused on UX and accessibility.",
    logo: aieseclogo,
  },
];

function Experience() {
  return (
    <section className="max-w-[900px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Experience
      </h1>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <Reveal key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="border border-purple-500/30 p-6 rounded-xl
                         bg-purple-500/5 hover:bg-purple-500/10
                         transition-colors"
            >
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-gray-100 text-2xl font-semibold">
                  {experience.company}
                </h2>

                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="h-9 object-contain"
                />
              </div>

              <p className="text-gray-400 text-sm">{experience.period}</p>
              <p className="text-purple-400 mb-3">
                {experience.position}
              </p>

              <p className="text-gray-300 leading-relaxed">
                {experience.description}
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Experience;
