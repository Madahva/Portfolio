import "../styles/ContactMe.css";
import { BiLinkExternal } from "react-icons/bi";

const ContactMe = () => {
  const activeName = () => {
    var inputNombre = document.getElementById("inputNombre");
    inputNombre.classList.add("contact__input--active");

    document.getElementById("nombre").addEventListener("blur", function () {
      inputNombre.classList.remove("contact__input--active");
    });
  };

  const activeEmail = () => {
    let inputEmail = document.getElementById("inputEmail");
    inputEmail.classList.add("contact__input--active");

    document.getElementById("email").addEventListener("blur", function () {
      inputEmail.classList.remove("contact__input--active");
    });
  };

  const activeSubject = () => {
    let inputAsunto = document.getElementById("inputAsunto");
    inputAsunto.classList.add("contact__input--active");

    document.getElementById("asunto").addEventListener("blur", function () {
      inputAsunto.classList.remove("contact__input--active");
    });
  };

  const activeMessage = () => {
    let inputMensaje = document.getElementById("inputMensaje");
    inputMensaje.classList.add("contact__input--active");

    document.getElementById("mensaje").addEventListener("blur", function () {
      inputMensaje.classList.remove("contact__input--active");
    });
  };

  return (
    <section className="contact" id="contact">
      <div  className="contact__container">
        <img src="src\images\contacto.png" alt="imagen de telefono" />
        <div className="contact__formulario">
          <h2 className="english">Get in touch</h2>
          <p className="english">
            If you wanna get in touch, talk to me about a project collaboration
            or just say hi, fill up the form below or feel free to contact me
            via Linkedin.
          </p>

          <h2 className="spanish">Contactame</h2>
          <p className="spanish">
            Si queres ponerte en contacto podes llenar el formulario o
            escribirme por Linkedin.
          </p>

          <div className="contact__redsocial__container">
            <div className="contact__redsocial">
              <a
                className="presentation__link"
                href="https://github.com/Madahva"
                target="_blank"
              >
                Github <BiLinkExternal />
              </a>
            </div>

            <div className="contact__redsocial">
              <a
                className="presentation__link"
                href="https://www.linkedin.com/in/guillermo-galarza-8a478220a/"
                target="_blank"
              >
                Linkedin <BiLinkExternal />
              </a>
            </div>
            <div className="contact__redsocial">
              <a
                className="presentation__link"
                href="../src/CurriculumVitae.pdf"
                target="_blank"
              >
                Curriculum <BiLinkExternal />
              </a>
            </div>
          </div>

          <form action="https://formspree.io/f/xknykwze" method="POST">
            <div
              id="inputNombre"
              className="contact__input__container"
              onFocus={activeName}
            >
              <label
                id="nombreLabel"
                className="contact__label english"
                htmlFor="nombre"
              >
                Name
              </label>

              <label
                id="nombreLabel"
                className="contact__label spanish"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                id="nombre"
                name="Name"
                className="contact__input__nombre"
                spellCheck="false"
                required
                type="text"
              />
            </div>

            <div
              id="inputEmail"
              className="contact__input__container"
              onFocus={activeEmail}
            >
              <label id="emailLabel" className="contact__label" htmlFor="email">
                E-mail
              </label>
              <input
                id="email"
                name="Email"
                className="contact__input__email"
                spellCheck="false"
                required
                type="email"
              />
            </div>

            <div
              id="inputAsunto"
              className="contact__input__container"
              onFocus={activeSubject}
            >
              <label
                id="asuntoLabel"
                className="contact__label english"
                htmlFor="asunto"
              >
                Subject
              </label>

              <label
                id="asuntoLabel"
                className="contact__label spanish"
                htmlFor="asunto"
              >
                Asunto
              </label>
              <input
                id="asunto"
                name="Subject"
                className="contact__input__asunto"
                spellCheck="false"
                required
                type="text"
              />
            </div>

            <div
              id="inputMensaje"
              className="contact__input__container contact__input__container__mensaje"
              onFocus={activeMessage}
            >
              <label
                id="mensajeLabel"
                className="contact__label english"
                htmlFor="mensaje"
              >
                Message
              </label>

              <label
                id="mensajeLabel"
                className="contact__label spanish"
                htmlFor="mensaje"
              >
                Mensaje
              </label>

              <textarea
                id="mensaje"
                name="Message"
                className="contact__input__mensaje"
                cols="28"
                rows="5"
                spellCheck="false"
                required
              ></textarea>
            </div>

            <div className="contact__input__submit__container">
              <input
                className="contact__input__submit english"
                type="submit"
                value="Send Message"
              />

              <input
                className="contact__input__submit spanish"
                type="submit"
                value="Enviar mensaje"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
