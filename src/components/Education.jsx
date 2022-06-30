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
          href={"https://app.aluracursos.com/degree/certificate/d3baf358-bd48-413e-869a-2fe05d5a7713"}
          tittleEn="Front-End web developer"
          tittleEs="Desarrollador web Front-End"
          description="Oracle & Alura Latam"
        />

        <Certificate
          href={"https://app.aluracursos.com/degree/certificate/c493f36d-6bfb-4a5e-9587-a99d124535fe"}
          tittleEn="Business Agility"
          tittleEs="Business Agility"
          description="Oracle & Alura Latam"
        />

        <Certificate
          href={"https://app.aluracursos.com/degree/certificate/17fea2ce-2b2e-4080-b26a-297d5f15efcb"}
          tittleEn="Back-end web developer"
          tittleEs="Desarrollador web Back-end"
          description="Oracle & Alura Latam"
        />
      </div>
    </section>
  );
};

export default Education;
