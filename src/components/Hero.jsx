import "../styles/Hero.css";
import profilePicture from "../images/guillermo__image.jpg";
import resume from "../images/resume.pdf";
import { BiLinkExternal } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="presentation">
      <img
        className="presentation__image"
        draggable="false"
        src={profilePicture}
        alt="Guillermo profile picture"
      />

      <div className="presentation__text-container">
        <h1 className="presentation__title">Guillermo Galarza</h1>
        <div className="english">
          <p className="presentation__paragraph">
            I am a web developer, with a lot of will to learn and improve.
          </p>
          <p className="presentation__paragraph">
            My favorite technologies are <strong><span>CSS, JavaScript and React.</span></strong>
          </p>
        </div>

        <div className="spanish">
          <p className="presentation__paragraph">
            Soy un desarrollador web con mucha predisposición para aprender y mejorar.
          </p>
          <p className="presentation__paragraph">
            Mis tecnologías favoritas son <strong><span>CSS, JavaScript y React.</span></strong>
          </p>
        </div>

        <div className="presentation__links-container">
          <a
            className="presentation__link"
            href="https://github.com/Madahva"
            target="_blank"
          >
            Github <BiLinkExternal />
          </a>

          <a
            className="presentation__link"
            href="https://www.linkedin.com/in/guillermo-galarza-8a478220a/"
            target="_blank"
          >
            Linkedin <BiLinkExternal />
          </a>

          <a
            className="presentation__link"
            href={resume}
            target="_blank"
          >
            Curriculum <BiLinkExternal />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
