import "../styles/AboutMe.css";
import firma from "../images/firma.svg";

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="english">
          <h2 className="about__title">About me</h2>

          <p className="about__paragraph">
            I'm a <strong><span>Full-stack</span></strong> web developer focused on
            <strong><span> Front-end</span></strong>.
          </p>

          <p className="about__paragraph">
            I like to train myself by taking courses and learning new
            technologies.
          </p>

          <p className="about__paragraph">
            I create responsive websites, fast and built with the best
            practices.
          </p>

          <p className="about__paragraph">
            I am a well organized person, problem solver and with great
            attention to detail.
          </p>

          <p className="about__paragraph">
            My hobbies are reading, learning languages and training.
          </p>
        </div>
        <div className="spanish">
          <h2 className="about__title">Sobre mí</h2>

          <p className="about__paragraph">
            Soy un desarrollador web <strong><span>Full-stack</span></strong> centrado en el
            <strong><span> Front-end</span></strong>.
          </p>

          <p className="about__paragraph">
            Me gusta capacitarme tomando cursos y aprendiendo nuevas tecnologías
          </p>

          <p className="about__paragraph">
            Creo sitios webs responsive, rápidos y construidos con las mejores
            prácticas.
          </p>

          <p className="about__paragraph">
            Soy una persona bien organizada, solucionador de problemas y con
            gran atención a los detalles.
          </p>

          <p className="about__paragraph">
            Mis hobbies son leer, aprender idiomas y entrenar.
          </p>
        </div>
        <img
          className="about__image"
          src={firma}
          draggable="false"
          alt="imagen de firma"
        />
      </div>
    </section>
  );
};

export default AboutMe;
