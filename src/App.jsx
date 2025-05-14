import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="bg-frostyWhite text-mapleGray font-sans">
      <Navbar />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
       <section id="certifications">
        <Certifications />
      </section>
      <section id="contact">
        <Contact />
      </section>
     
    
    </div>
  );
}

export default App;
