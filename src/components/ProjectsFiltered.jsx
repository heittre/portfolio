import projects from "./Projects";
import { motion } from "framer-motion";

const ProjectsFiltered = ({ interest }) => {
  const filteredProjects = projects.filter(
    (project) => project.interest === interest
  );

  return (
    <section className="mt-24 px-6 max-w-[1200px] mx-auto">
      <h2 className="text-gray-200 text-3xl md:text-4xl font-bold mb-12 text-center">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6"
          >
            <h3 className="text-purple-400 text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="px-2 py-1 bg-white/10 rounded">
                  {t}
                </span>
              ))}
            </div>

            <a
              href={project.github}
              target="_blank"
              className="text-purple-400 hover:underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsFiltered;
