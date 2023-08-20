import About from "@/Components/About";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import WorkExperience from "@/Components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />
      <section id="home" className="snap-start">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section className="snap-center" id="expreience">
        <WorkExperience />
      </section>
      <section className="snap-start" id="skills">
        <Skills />
      </section>
      <section className="snap-start" id="projects">
        <Projects />
      </section>
    </div>
  );
}
