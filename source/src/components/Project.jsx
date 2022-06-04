const Project = (props) => {
  return (
    <div className="projects__container">
      <a target="_blank" href={props.demo}>
        <img draggable="false" src={props.src} alt={props.alt} loading="lazy" />
      </a>

      <div className="projects__text english">
        <h3>{props.tittleEn}</h3>
        <p>{props.descriptionEn}</p>
        <div className="projects__btn-container">
          <a
            className="projects__btn-repocitorio"
            target="_blank"
            href={props.demo}
          >
            Demo
          </a>
          <a className="projects__btn-demo" target="_blank" href={props.repo}>
            Repository
          </a>
        </div>
      </div>

      <div className="projects__text spanish">
        <h3>{props.tittleEs}</h3>
        <p>{props.descriptionEs}</p>
        <div className="projects__btn-container">
          <a
            className="projects__btn-repocitorio"
            target="_blank"
            href={props.demo}
          >
            Demo
          </a>
          <a className="projects__btn-demo" target="_blank" href={props.repo}>
            Repositorio
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
