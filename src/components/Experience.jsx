import "../styles/Experience.css";
import Project from "./Project.jsx";
import spaceTourism from "../images/projects/space_tourism.png";
import faqAccordion from "../images/projects/FAQ__accordion.png";
import proofSection from "../images/projects/proof__section.png";
import bookmark from "../images/projects/bookmark__landing-page.png";

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
        demo="https://madahva.github.io/space-tourism-website/"
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
          demo="https://madahva.github.io/Bookmark-landing-page/"
          repo="https://github.com/Madahva/Bookmark-landing-page"
          src={bookmark}
          alt="Bookmark landing-page"
          tittleEn="Bookmark landing-page"
          descriptionEn="CSS and JavaScript"
          tittleEs="Bookmark landing-page"
          descriptionEs="CSS y JavaScript"
        />

      </div>


      <Project
        demo="https://6275e108762cc121b444ff54--symphonious-chaja-5fea6d.netlify.app/"
        repo="https://github.com/Madahva/my-learning-area/tree/main/Practice/React/Social%20proof%20section%20-%20React"
        src={proofSection}
        alt="Proof section"
        tittleEn="Social proof section"
        descriptionEn="React and CSS"
        tittleEs="Sección de validación social"
        descriptionEs="CSS y React"
      />

      <div className="toTurn">
        <Project
          demo="https://precious-centaur-867211.netlify.app/"
          repo="https://github.com/Madahva/my-learning-area/tree/main/Practice/CSS/FAQ%20accordion%20card%20-%20CSS"
          src={faqAccordion}
          alt="FAQ Accordion card component image"
          tittleEn="FAQ Accordion card component"
          descriptionEn="CSS and JavaScript"
          tittleEs="Página de FAQ en acordeón"
          descriptionEs="CSS y JavaScript"
        />
      </div>




    </section>
  );
};

export default Experience;
