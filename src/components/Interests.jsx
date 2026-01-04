import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiArrowUpRight } from "react-icons/fi"; // diagonal arrow

const Interests = ({ path, titleSequence, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="max-w-[900px] mx-auto mb-20 p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
    >
      <TypeAnimation
        sequence={titleSequence}
        speed={50}
        repeat={Infinity}
        className="text-purple-400 font-semibold text-2xl md:text-4xl mb-4"
      />
      <p className="text-gray-300 text-lg md:text-xl mb-8">{description}</p>

      <a href={path} target="_blank" rel="noopener noreferrer">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="px-6 py-3 rounded-xl border border-purple-400 text-purple-400 font-semibold flex items-center gap-2 hover:bg-purple-400 hover:text-black transition-colors"
        >
          View Projects
          <FiArrowUpRight className="w-5 h-5" />
        </motion.button>
      </a>
    </motion.div>
  );
};

export default Interests;
