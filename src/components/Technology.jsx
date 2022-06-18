
const Technology = (props) => {
  return (

    <a href={props.link} target="_blank">
      <div className={props.className}>
        <img src={props.url} draggable="false" alt={props.alt} loading="lazy" />
        <img src={props.hoverUrl} draggable="false" alt={props.alt} loading="lazy" />
        <h3>{props.name}</h3>
      </div>
    </a>

  );
};

export default Technology;
