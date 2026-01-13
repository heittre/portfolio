import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portofolio from "../components/Portofolio";
import Projects from "../components/Projects";
import MainLayout from "../components/MainLayout";

const OtherInterests = () => {
  return (
      <MainLayout>
        <section id="about">
      <Hero
        title="Miscellaneous Projects"
        subtitle="End-to-End Application Testing"
        description="This Section features miscellaneous projects"
      />
      {/* <Projects interest="testing" /> */}
    {/* <Projects interest="other" /> */}
<p className="mt-8 text-gray-500 italic flex items-center justify-center gap-2">
  <span className="text-lg">🚧</span>
  Projects coming soon — this section is under construction.
</p>
      </section>
    </MainLayout>
  );
};

export default OtherInterests;
