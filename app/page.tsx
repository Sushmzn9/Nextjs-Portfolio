import About from "@/Components/About";
import Head from "next/head";

import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import WorkExperience from "@/Components/WorkExperience";

export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scroll-smooth">
      <Header />
      <section id="home" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section className="snap-center" id="experience">
        <WorkExperience />
      </section>
      <section className="snap-start" id="skills">
        <Skills />
      </section>
      <section className="snap-start" id="projects">
        <Projects />
      </section>
      <section className="snap-start" id="contact">
        <Contact />
      </section>
    </div>
  );
}
