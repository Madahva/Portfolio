import "../styles/Education.css";
import Certificate from "./Certificate.jsx";

const Education = () => {
  return (
    <section className="education" id="education">
      <h2 className="education__tittle english">Education</h2>
      <h2 className="education__tittle spanish">Educación</h2>
      <p className="para-first english">
        I am lucky to be trained in{" "}
        <a
          className="education__para-link"
          target="_blank"
          href="https://www.oracle.com/ar/education/oracle-next-education/#curso"
        >
          <strong>ONE – Oracle Next Education.</strong>
        </a>
      </p>
      <p className="education__para english">
        <strong>
          <span>ONE</span>
        </strong>{" "}
        is an intensive training program that aims to train and develop people
        with high potential so they can join challenging projects in different
        technological teams.
      </p>
      <p className="para-first spanish">
        Tengo la buena fortuna de ser formado en{" "}
        <a
          className="education__para-link"
          target="_blank"
          href="https://www.oracle.com/ar/education/oracle-next-education/#curso"
        >
          <strong>ONE – Oracle Next Education.</strong>
        </a>
      </p>
      <p className="education__para spanish">
        <strong>
          <span>ONE</span>
        </strong>{" "}
        es un programa de formación intensiva que tiene como finalidad capacitar
        y desarrollar a personas con alto potencial para que luego se sumen a
        proyectos desafiantes en diferentes equipos de tecnología.
      </p>
      <div className="education__certificates-container">
        <Certificate
          href={"https://app.aluracursos.com/user/galarzaguillermo-ggm/degree-frontend-one-15423/certificate"}
          tittleEn="Front-End web developer"
          tittleEs="Desarrollador web Front-End"
          description="Oracle & Alura Latam"
        />

        <Certificate
          href={"https://app.aluracursos.com/user/galarzaguillermo-ggm/degree-business-agility-one-15419/certificate"}
          tittleEn="Business Agility"
          tittleEs="Business Agility"
          description="Oracle & Alura Latam"
        />

        <Certificate
          href={"https://app.aluracursos.com/user/galarzaguillermo-ggm/degree-javaoo-one-15424/certificate"}
          tittleEn="Back-end web developer"
          tittleEs="Desarrollador web Back-end"
          description="Oracle & Alura Latam"
        />
      </div>
    </section>
  );
};

export default Education;
