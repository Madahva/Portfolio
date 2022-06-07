import Technology from "./Technology.jsx";
import "../styles/Skills.css";
import next from "../images/skills/next_Logo.svg";
import css from "../images/skills/CSS_Logo.svg";
import javaScript from "../images/skills/JavaScript_Logo.svg";
import react from "../images/skills/React_Logo.svg";
import git from "../images/skills/Git_Logo.svg";
import java from "../images/skills/Java_Logo.svg";
import mySQL from "../images/skills/MySQL_Logo.svg";
import graphQL from "../images/skills/GraphQL_Logo.svg";
import TypeScript from "../images/skills/Typescript_Logo.svg";
import firBase from "../images/skills/firebase_Logo.svg";
import Redux from "../images/skills/Redux_Logo.svg";
import figma from "../images/skills/figma_Logo.svg";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="english">Tech Stack </h2>
      <h2 className="spanish">Habilidades</h2>
      <p className="english">
        A list of my favorite tools and technologies that I use on a regular
        basis.
      </p>
      <p className="spanish">
        Esta es una lista de mis herramientas y tecnologías favoritas que uso
        normalmente.
      </p>
      <div className="grid-container">
        <Technology
          className="grid-item-1"
          url={javaScript}
          alt="JavaScript Logo"
          name="JavaScript"
        />

        <Technology
          className="grid-item-4"
          url={TypeScript}
          alt="TypeScript logo"
          name="TypeScript"
        />

        <Technology
          className="grid-item-2"
          url={react}
          alt="React Logo"
          name="React"
        />

        <Technology
          className="grid-item-3"
          url={Redux}
          alt="Redux logo"
          name="Redux"
        />

        <Technology
          className="grid-item-11"
          url={next}
          alt="Next logo"
          name="Next.js"
        />

        <Technology
          className="grid-item-9"
          url={git}
          alt="Git logo"
          name="Git"
        />

        <Technology
          className="grid-item-7"
          url={graphQL}
          alt="GraphQL logo"
          name="GraphQL"
        />

        <Technology
          className="grid-item-5"
          url={firBase}
          alt="firBase logo"
          name="Firbase"
        />

        <Technology
          className="grid-item-6"
          url={java}
          alt="Java logo"
          name="Java"
        />
        
        <Technology
          className="grid-item-8"
          url={mySQL}
          alt="MySQL logo"
          name="MySQL"
        />

        <Technology
          className="grid-item-10"
          url={css}
          alt="CSS logo"
          name="CSS3"
        />

        <Technology
          className="grid-item-12"
          url={figma}
          alt="Figma logo"
          name="Figma"
        />
      </div>
    </section>
  );
};

export default Skills;
