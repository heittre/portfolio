import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portofolio from "../components/Portofolio";
import Projects from "../components/Projects";
import DownloadCVButton from "../components/DownloadCVButton";
import cv from "../assets/Chamudi_ML_CV.pdf"
import MainLayout from "../components/MainLayout";

const MachineLearning = () => {
  return (
      <MainLayout>
        <section id="about">
      <Hero
        title="Data Science and Machine Learning Projects"
        subtitle="Applied machine learning projects focused on data-driven problem solving"
        description="This section showcases hands-on projects involving data preprocessing, feature engineering,
model training, evaluation, and interpretation, with an emphasis on practical use cases and
well-structured workflows."
      />
      <DownloadCVButton cv={cv} />
      <Projects interest="ml" />
      </section>
    </MainLayout>
  );
};

export default MachineLearning;
