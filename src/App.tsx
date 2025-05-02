import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Footer } from "@/components/footer/Footer";
import { ScrollToTopButton } from "@/components/footer/GoToTopBtn";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
