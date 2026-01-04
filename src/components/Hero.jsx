import { motion } from "framer-motion";
import DownloadCVButton from "./DownloadCVButton";
import Socials from "./Socials";
const Hero = ({title,description}) => {
  return (
    <section className="relative mt-24 px-6 overflow-hidden" id="hero">
      {/* Subtle background glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Subtitle */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-purple-400 text-lg md:text-2xl mb-3 tracking-wide"
        >
          Specialized Focus Area
        </motion.p>

        {/* Title */}
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-gray-200 text-4xl md:text-6xl font-bold mb-4"
        >
         {title}
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          variants={{
            hidden: { scaleX: 0 },
            visible: { scaleX: 1 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="origin-left h-1 w-24 bg-purple-500 mx-auto mb-6 rounded-full"
        />

        {/* Description */}
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
         {description}
        </motion.p>
       
      </motion.div>
    </section>
  );
};

export default Hero;
