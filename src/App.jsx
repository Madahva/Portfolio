import "./styles/App.css";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Education from './components/Education.jsx'
import ContactMe from './components/ContactMe.jsx'
import ScrollToTopButton from "./components/ScrollToTopButton.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <AboutMe />
      <Skills />
      <Experience />
      <Education />
      <ContactMe />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

export default App;
