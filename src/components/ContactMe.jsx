import "../styles/ContactMe.css";
import "../styles/EmailSentModal.css";
import contactImage from "../images/contact.svg";
import mailImage from "../images/mail_sent.svg";
import { BiLinkExternal } from "react-icons/bi";
import resume from "../images/resume.pdf";

const ContactMe = () => {
  var userName = " ";
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

  function handleSubmit() {
    userName = document.querySelector("#nombre").value;
    const form = document.querySelector("form");
    form.addEventListener("submit", showContactModal);

    async function showContactModal(e) {
      e.preventDefault();
      const form = new FormData(this);
      const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        this.reset();
        const modal = document.querySelector("#myModal");
        modal.style.display = "block";
      }
    }

    const modalTittleEn = document.querySelector(".modal-tittle--english");
    modalTittleEn.textContent = `Thanks, ${userName}`;

    const modalTittleEs = document.querySelector(".modal-tittle--spanish");
    modalTittleEs.textContent = `Gracias, ${userName}`;
  }

  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <img
          className="contact-image"
          src={contactImage}
          alt="imagen de telefono"
          draggable="false"
        />
        <div className="contact__formulario">
          <h2 className="english">Get in touch</h2>
          <p className="english">
            If you wanna get in touch, talk to me about a project collaboration
            or just <i>say hi</i>, fill up the form below or feel free to
            contact me via Linkedin.
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
              <a className="presentation__link" href={resume} target="_blank">
                Curriculum <BiLinkExternal />
              </a>
            </div>
          </div>

          <form action="https://formspree.io/f/xvollnpr" method="POST">
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
                onClick={handleSubmit}
                value="Send Message"
              />

              <input
                className="contact__input__submit spanish"
                type="submit"
                onClick={handleSubmit}
                value="Enviar mensaje"
              />
            </div>
          </form>
        </div>
      </div>

      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="english">
            <h3 className="modal-tittle--english"></h3>
            <img src={mailImage} alt="mail" />

            <p>You message has been sent.</p>
            <p>Expect a reply within the next 24hrs.</p>
            <p>- Guillermo</p>
          </div>

          <div className="spanish">
            <h3 className="modal-tittle--spanish"></h3>
            <img src={mailImage} alt="mail" />

            <p>Tu mensage se envió correctamente.</p>
            <p>Espera una respuesta dentro de las siguientes 24hrs.</p>
            <p>- Guillermo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
