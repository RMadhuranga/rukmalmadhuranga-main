import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionScrollBackground from "@/components/SectionScrollBackground";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <SectionScrollBackground />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
