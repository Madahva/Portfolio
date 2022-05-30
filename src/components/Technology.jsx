import javaScript from "../images/skills/JavaScript_Logo.svg";

const Technology = (props) => {
  return (
    <div className={props.className}>
      <img src={props.url} draggable="false" alt={props.alt} />
      <h3>{props.name}</h3>
    </div>
  );
};

export default Technology;
