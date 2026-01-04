import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portofolio from "../components/Portofolio";
import Projects from "../components/Projects";
import DownloadCVButton from "../components/DownloadCVButton";
import cv from "../assets/chamudi_siriwardhane_resume 8.pdf"
import MainLayout from "../components/MainLayout";

const MachineLearning = () => {
  return (
      <MainLayout>
        <section id="about">
      <Hero
        title="Data Science and Machine Learning Projects"
        subtitle="Machine Learning projects covering basic and advanced concepts"
        description=" Exploring and building scalable, real-world applications with modern
          frontend frameworks, backend systems, and clean architectural
          principles."
      />
      <DownloadCVButton cv={cv} />
      <Projects interest="full-stack" />
      </section>
    </MainLayout>
  );
};

export default MachineLearning;
