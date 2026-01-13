import React from 'react'
import project1 from '/default.png'
import project2 from '../assets/project_1.png'
import project3 from '/default.png'
import { FaGithubSquare } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

import Reveal from '../components/Reveal'

const projects = [
  {
    interest: "full-stack",
    img: project1,
    title: "StayMate",
    description:
      "A Property Management System where Property owners can list their properties and tenants can book a property. Additionally property owners can find technicians and hire them to repair their properties",
    technologies: ["React", "Tailwind CSS", "MongoDB", "Express JS", "Node JS"],
    links: {
      github: "https://github.com/GaveeshaWickrama/StayMate",
    },
  },
  {
    interest: "full-stack",
    img: project2,
    title: "JobLinkUp",
    description: "A Job Portal where job seekers can find jobs, recruiters can list their jobs",
    technologies: ["HTML", "CSS", "Javascript", "PHP"],
    links: {
      site: "https://joblinkup.duckdns.org/",
      github: "https://github.com/iamtrazy/JobLinkUp",
    },
  },
  {
    interest: "full-stack",
    img: project3,
    title: "Java Library Management System",
    description: "A simple Java OOP library Management system",
    technologies: ["JAVA"],
    links: {
      youtubelink: "https://youtu.be/EOV29zpo3y8",
      github: "https://github.com/heittre/Library-Management-System",
    },
  },
  {
    interest: "testing",
    img: project3,
    title: "Saucedemo Cypress automation framework",
    description: "This is an automation framework to automate Saucedemo.com",
    technologies: ["Selenium","TestNG"],
    links: {
      github: "https://github.com/heittre/saucedemo_cypress_framework",
    },
  },
  {
    interest: "testing",
    img: project3,
    title: "Selenium automation framework",
    description: "This is an automation framework to automate tutorialsninja.com",
    technologies: ["Cypress", "Javascript"],
    links: {
      github: "https://github.com/heittre/tutorialsninja_selenium_automation_framework",
    },
  },
  {
    interest: "ml",
    img: project3,
    title: "Cognitive Distortion Classification for CBT Delivery with XAI Integration (Final Year Research)",
    description: "This is a Python-based model for classifying cognitive distortions into five categories using XAI techniques (SHAP and LIME) to provide interpretable explanations for clinicians as a CBT delivery aid",
    technologies: ["Python", "scikit-learn", "SHAP", "LIME", "pandas", "NumPy", "Jupyter Notebook", "Google Collab"],
    // links: {
    //   github: "https://github.com/heittre/tutorialsninja_selenium_automation_framework",
    // },
  },
  {
    interest: "ml",
    img: project3,
    title: "Wine Dataset Clustering Using K-Means and Hierarchical Methods",
    description: "Conducted unsupervised clustering on wine datasets using K-Means (with Elbow method for optimal cluster selection) and Hierarchical Clustering (agglomerative approach) to identify natural groupings.",
    technologies: ["R programming", "RStudio"],
    // links: {
    //   github: "https://github.com/heittre/tutorialsninja_selenium_automation_framework",
    // },
  },
  {
    interest: "ml",
    img: project3,
    title: "Appliance Energy Consumption Prediction Using Multivariate Time-Series Data",
    description: "In this project I engineered meaningful features and applied deep learning techniques to predict future energy consumption accurately.",
    technologies: ["Python", "Pandas", "NumPy", "TensorFlow", "Keras", "Jupyter Notebook"],
    // links: {
    //   github: "https://github.com/heittre/tutorialsninja_selenium_automation_framework",
    // },
  },
  {
    interest: "ml",
    img: project3,
    title: "Market Basket Analysis Using Association Rule Mining",
    description: "This is a Market Basket Analysis on retail transaction data to uncover customer spending patterns using association rule mining techniques.",
    technologies: [ "Weka", "Microsoft Excel", "Data Visualization"],
    // links: {
    //   github: "https://github.com/heittre/tutorialsninja_selenium_automation_framework",
    // },
  }
];


const Projects = ({ interest }) => {
  const filteredProjects = interest
    ? projects.filter((project) => project.interest === interest)
    : projects; // if no interest, show all

  return (
    <div className="max-w-[1200px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8">Portfolio</h2>

      {filteredProjects.map((project, index) => (
        <Reveal key={index}>
          <div
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } mb-12`}
          >
            {/* Project Image */}
            <div className="w-full md:w-1/2 p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Project Details */}
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>

              <div className="flex space-x-4 mb-4">
                {project.links?.site && (
                  <a
                    href={project.links?.site}
                    className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 text-center"
                    target="_blank"
                  >
                    View Site
                  </a>
                )}
                {project.links?.youtubelink && (
                  <a
                    href={project.links.youtubelink}
                    className="flex items-center gap-1 text-white hover:underline"
                    target="_blank"
                  >
                    Youtube Video <MdOutlineArrowOutward />
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    className="flex items-center gap-1 text-white"
                    target="_blank"
                  >
                    <FaGithubSquare className="w-7 h-7" />
                  </a>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-1">
                <h4 className="text-white font-bold pr-2">Technologies</h4>
                <ul className="flex flex-wrap items-center gap-3">
                  {project.technologies.map((tech, techIndex) => (
                    <li key={techIndex} className="text-gray-300">
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
};

export default Projects;


