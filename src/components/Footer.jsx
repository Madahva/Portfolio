import "../styles/Footer.css";
import starsIcon from "../images/stars-icon.svg";

const Footer = () => {
  return (
    <footer id="footer">
      <img src={starsIcon} alt="Stars icon" draggable="false" />

      <p className="english">
        <span>Developed with React by</span> Guillermo Galarza.
      </p>
      <p className="spanish">
        <span>Creado con React por</span> Guillermo Galarza.
      </p>
    </footer>
  );
};

export default Footer;
