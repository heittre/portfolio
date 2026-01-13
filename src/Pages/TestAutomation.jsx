import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portofolio from "../components/Portofolio";
import Projects from "../components/Projects";
import DownloadCVButton from "../components/DownloadCVButton";
import cv from "../assets/QE_CV.pdf"
import MainLayout from "../components/MainLayout";

const TestAutomation = () => {
  return (
      <MainLayout>
        <section id="about">
      <Hero
        title="Testing Projects"
        subtitle="End-to-End Application Testing"
        description="Projects focused on UI testing and API testing"
      />
      <DownloadCVButton cv={cv} />
      {/* <Projects interest="testing" /> */}
    <Projects interest="testing" />

      </section>
    </MainLayout>
  );
};

export default TestAutomation;
