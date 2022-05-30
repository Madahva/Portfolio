import "../styles/Nav.css";
import starsIcon from "../images/stars-icon.svg";
import { FaBars } from "react-icons/fa";

function Nav() {
  function showLinks() {
    let navLinksEn = document.querySelector(".nav-english");
    let navLinksEs = document.querySelector(".nav-spanish");

    navLinksEn.style.display === "block"
      ? (navLinksEn.style.display = "none")
      : (navLinksEn.style.display = "block");

    navLinksEs.style.display === "block"
      ? (navLinksEs.style.display = "none")
      : (navLinksEs.style.display = "block");

    navLinksEn.onclick = function () {
      navLinksEn.style.display = "none";
      navLinksEs.style.display = "none";
    };

    navLinksEs.onclick = function () {
      navLinksEn.style.display = "none";
      navLinksEs.style.display = "none";
    };
  }

  function hiddenLinks() {
    let navLinksEn = document.querySelector(".english");
    let navLinksEs = document.querySelector(".spanish");

    navLinksEn.style.display === "block"
      ? (navLinksEn.style.display = "block")
      : (navLinksEn.style.display = "none");

    navLinksEs.style.display === "block"
      ? (navLinksEs.style.display = "block")
      : (navLinksEs.style.display = "none");
  }

  function switchLang() {
    const btnSwitch = document.querySelector("#switch");

    document.body.classList.toggle("inSpanish");
    btnSwitch.classList.toggle("active");

    hiddenLinks();
  }

  return (
    <header>
      <nav className="nav">
        <div className="nav__logo">
          <img
            className="nav__logo-image"
            draggable="false"
            src={starsIcon}
            alt="Stars icon"
          ></img>
          <h2 className="nav__logo-text">Madhava</h2>
        </div>

        <button onClick={switchLang} className="nav__lang-switch" id="switch">
          <span>En</span>
          <span>|</span>
          <span>Es</span>
        </button>

        <div className="nav__desktop-links--english english">
          <a href="#about">About me</a>
          <a href="#skills">Tech Stack</a>
          <a href="#proyects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Get in touch</a>
        </div>

        <div className="nav__desktop-links--spanish spanish">
          <a href="#about">Acerca de mí</a>
          <a href="#skills">Habilidades</a>
          <a href="#proyects">Experiencia</a>
          <a href="#education">Educación</a>
          <a href="#contact">Contactame</a>
        </div>

        <button onClick={showLinks} className="nav__menu-button">
          <FaBars className="nav__menu-button__icon" />
        </button>
      </nav>

      <div className="nav__movile-links nav-spanish">
        <a href="#about">Acerca de mí</a>
        <a href="#skills">Habilidades</a>
        <a href="#proyects">Experiencia</a>
        <a href="#education">Educación</a>
        <a href="#contact">Contactame</a>
      </div>

      <div className="nav__movile-links nav-english">
        <a href="#about">About me</a>
        <a href="#skills">Tech Stack</a>
        <a href="#proyects">Projects</a>
        <a href="#education">Education</a>
        <a href="#contact">Get in touch</a>
      </div>
    </header>
  );
}

export default Nav;
