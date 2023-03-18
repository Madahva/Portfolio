import "../styles/Experience.css";
import Project from "./Project.jsx";
import spaceTourism from "../images/projects/space_tourism.png";
import faqAccordion from "../images/projects/FAQ__accordion.png";
import proofSection from "../images/projects/proof__section.png";
import bookmark from "../images/projects/bookmark__landing-page.png";
import grover from "../images/projects/grover__landing-page.png";
import easybank from "../images/projects/easybank__landing-page.png";
import pokedex from "../images/projects/pokedex.png";
import ecommerce from "../images/projects/e-commerce.png";

const Experience = () => {
  return (
    <section className="projects" id="proyects">
      <h2 className="english">Projects</h2>
      <p className="english">A selection of projects I've worked on.</p>
      <h2 className="spanish">Experiencia</h2>
      <p className="spanish">
        Esta es una selección de proyectos en los que trabajé
      </p>

      <Project
        demo="https://madahva.github.io/Space-tourism--Website/"
        repo="https://github.com/Madahva/space-tourism-website"
        src={spaceTourism}
        alt="Space tourism multi-page website"
        tittleEn="Space tourism multi-page website"
        descriptionEn="JavaScript and CSS"
        tittleEs="Space tourism multi-page website"
        descriptionEs="JavaScript y CSS"
      />

      <div className="toTurn">
        <Project
          demo="https://darling-pixie-9ff28f.netlify.app/"
          repo="https://github.com/Madahva/Grover--Landing-page"
          src={grover}
          alt="Grover - Landing page"
          tittleEn="Grover - Landing page"
          descriptionEn="Javascript and CSS"
          tittleEs="Grover - Landing page"
          descriptionEs="Javascript y CSS"
        />
      </div>

      <Project
        demo="https://madahva.github.io/Bookmark--Landing-page/"
        repo="https://github.com/Madahva/Bookmark-landing-page"
        src={bookmark}
        alt="Bookmark landing-page"
        tittleEn="Bookmark landing-page"
        descriptionEn="JavaScript and CSS"
        tittleEs="Bookmark landing-page"
        descriptionEs="JavaScript y CSS"
      />

      <div className="toTurn">
        <Project
          demo="https://madahva.github.io/Easybank--Landing-page/"
          repo="https://github.com/Madahva/Easybank--Landing-page"
          src={easybank}
          alt="Easybank landing-page"
          tittleEn="Easybank landing-page"
          descriptionEn="JavaScript and CSS"
          tittleEs="Easybank landing-page"
          descriptionEs="JavaScript y CSS"
        />
      </div>

      <Project
        demo="https://pokedex-pi.netlify.app/"
        repo="https://github.com/Madahva/Pokedex-SPA"
        src={pokedex}
        alt="Pokedex"
        tittleEn="Pokedex | SPA"
        descriptionEn="React, Express, PostgreSQL, etc"
        tittleEs="Pokedex | SPA"
        descriptionEs="React, Express, PostgreSQL, etc"
      />

      <div className="toTurn">
        <Project
          demo="https://ecommerce--pf.vercel.app/"
          repo="https://github.com/Madahva/E-commerce--Front"
          src={ecommerce}
          alt="Full-stack E-commerce web-site"
          tittleEn="E-commerce"
          descriptionEn="TypeScript, React, PostgreSQL, etc"
          tittleEs="E-commerce"
          descriptionEs="TypeScript, React, PostgreSQL, etc"
        />
      </div>

    </section>
  );
};

export default Experience;
