import Technology from "./Technology.jsx";
import "../styles/Skills.css";
import sequelize from "../images/skills/sequelizejs-icon.svg"
import css from "../images/skills/CSS_Logo.svg";
import javaScript from "../images/skills/JavaScript_Logo.svg";
import react from "../images/skills/React_Logo.svg";
import git from "../images/skills/Git_Logo.svg";
import jest from "../images/skills/Jest_Logo.svg";
import postgreSQL from "../images/skills/postgresql_Logo.svg"
import nodejs from "../images/skills/nodejs_Logo.svg";
import TypeScript from "../images/skills/Typescript_Logo.svg";
import express from "../images/skills/expressjs_logo.svg"
import Redux from "../images/skills/Redux_Logo.svg";
import figma from "../images/skills/figma_Logo.svg";

import javaScript_origin from "../images/skills/original_logos/javaScript-icon.svg";
import typeScript_origin from "../images/skills/original_logos/typeScript-icon.svg";
import react_origin from "../images/skills/original_logos/react-icon.svg";
import redux_origin from "../images/skills/original_logos/redux-icon.svg";
import sequelize_origin from "../images/skills/original_logos/sequelizejs_Logo.svg";
import git_origin from "../images/skills/original_logos/git-icon.svg";
import express_origin from "../images/skills/original_logos/expressjs_logo.svg"
import jest_origin from "../images/skills/original_logos/jest_Logo.svg";
import postgreSQL_origin from "../images/skills/original_logos/postgresql_Logo.svg";
import css_origin from "../images/skills/original_logos/css-icon.svg";
import figma_origin from "../images/skills/original_logos/figma-icon.svg";
import nodejs_origin from "../images/skills/original_logos/nodejs-icon.svg";

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
          className="grid-item-4"
          url={TypeScript}
          hoverUrl={typeScript_origin}
          alt="TypeScript logo"
          name="TypeScript"
          link="https://www.typescriptlang.org/"
        />

        <Technology
          className="grid-item-2"
          url={react}
          hoverUrl={react_origin}
          alt="React Logo"
          name="React"
          link="https://reactjs.org/"
        />

        <Technology
          className="grid-item-3"
          url={Redux}
          hoverUrl={redux_origin}
          alt="Redux logo"
          name="Redux"
          link="https://redux.js.org/"
        />

        <Technology
          className="grid-item-1"
          url={javaScript}
          hoverUrl={javaScript_origin}
          alt="JavaScript Logo"
          name="JavaScript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />

        <Technology
          className="grid-item-6"
          url={jest}
          hoverUrl={jest_origin}
          alt="Jest logo"
          name="Jest"
          link="https://jestjs.io/"
        />

        <Technology
          className="grid-item-9"
          url={git}
          hoverUrl={git_origin}
          alt="Git logo"
          name="Git"
          link="https://git-scm.com/"
        />

        <Technology
          className="grid-item-7"
          url={nodejs}
          hoverUrl={nodejs_origin}
          alt="Node logo"
          name="Node.js"
          link="https://nodejs.org/en/docs"
        />

        <Technology
          className="grid-item-5"
          url={express}
          hoverUrl={express_origin}
          alt="Express logo"
          name="Express"
          link="https://expressjs.com/"
        />

        <Technology
          className="grid-item-11"
          url={sequelize}
          hoverUrl={sequelize_origin}
          alt="Sequelize logo"
          name="Sequelize"
          link="https://sequelize.org/"
        />
        <Technology
          className="grid-item-8"
          url={postgreSQL}
          hoverUrl={postgreSQL_origin}
          alt="PostgreSQL logo"
          name="PostgreSQL"
          link="https://www.postgresql.org/"
        />

        <Technology
          className="grid-item-10"
          url={css}
          hoverUrl={css_origin}
          alt="CSS logo"
          name="CSS3"
          link="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />

        <Technology
          className="grid-item-12"
          url={figma}
          hoverUrl={figma_origin}
          alt="Figma logo"
          name="Figma"
          link="https://www.figma.com/"
        />
      </div>
    </section>
  );
};

export default Skills;
