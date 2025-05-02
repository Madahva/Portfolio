import { Navbar } from "@/components/navbar/Navbar";
import { Hero } from "@/components/hero/Hero";
import { Skills } from "@/components/skills/Skills";
import { Experience } from "@/components/experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Footer } from "@/components/footer/Footer";

import { ScrollToTopButton } from "@/components/GoToTopBtn";
import { InteractiveGridPattern } from "@/components/animetedBackgrounds/InteractiveGridPattern";
import { Particles } from "@/components/animetedBackgrounds/Particles";

import { cn } from "@/lib/utils";

function App() {
  return (
    <>
      <Navbar />
      <div className="relative">
        <Hero />
        <Skills />
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
          )}
          squares={[80, 80]}
          squaresClassName="hover:fill-[#5700ff]/20"
        />
      </div>

      <div className="relative">
        <Experience />
        <Projects />
        <Footer />

        <Particles
          className="absolute inset-0 z-0"
          quantity={100}
          color="#5700ff"
          size={1.5}
          refresh
          vx={0.2}
          vy={-0.5}
        />
      </div>

      <ScrollToTopButton />
    </>
  );
}

export default App;
