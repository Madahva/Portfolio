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


import javaScript_origin from "../images/skills/original_logos/javaScript-icon.svg";
import typeScript_origin from "../images/skills/original_logos/typeScript-icon.svg";
import react_origin from "../images/skills/original_logos/react-icon.svg";
import redux_origin from "../images/skills/original_logos/redux-icon.svg";
import next_origin from "../images/skills/original_logos/next-icon.svg";
import git_origin from "../images/skills/original_logos/git-icon.svg";
import graphQL_origin from "../images/skills/original_logos/graphQL-icon.svg";
import fireBase_origin from "../images/skills/original_logos/firebase-icon.svg";
import java_origin from "../images/skills/original_logos/java-icon.svg";
import mySQL_origin from "../images/skills/original_logos/mySQL-icon.svg";
import css_origin from "../images/skills/original_logos/css-icon.svg";
import figma_origin from "../images/skills/original_logos/figma-icon.svg";

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
          hoverUrl={javaScript_origin}
          alt="JavaScript Logo"
          name="JavaScript"
          link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />

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
          className="grid-item-11"
          url={next}
          hoverUrl={next_origin}
          alt="Next logo"
          name="Next.js"
          link="https://nextjs.org/"
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
          url={graphQL}
          hoverUrl={graphQL_origin}
          alt="GraphQL logo"
          name="GraphQL"
          link="https://graphql.org/"
        />

        <Technology
          className="grid-item-5"
          url={firBase}
          hoverUrl={fireBase_origin}
          alt="fireBase logo"
          name="Firebase"
          link="https://firebase.google.com/"
        />

        <Technology
          className="grid-item-6"
          url={java}
          hoverUrl={java_origin}
          alt="Java logo"
          name="Java"
          link="https://dev.java/"
        />
        
        <Technology
          className="grid-item-8"
          url={mySQL}
          hoverUrl={mySQL_origin}
          alt="MySQL logo"
          name="MySQL"
          link="https://www.mysql.com/"
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
