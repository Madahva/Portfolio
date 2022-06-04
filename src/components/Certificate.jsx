const Certificate = (props) => {
  return (
    <div className="education__certificate">
      <a target="_blank" href={props.href}>
        <div>
         {/*  ONE Logo Image here */}
        </div>
      </a>
      <h3 className="english">{props.tittleEn}</h3>
      <h3 className="spanish">{props.tittleEs}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default Certificate;
