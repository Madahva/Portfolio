function myFunction() {
    let navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }
}

let inputNombre = document.getElementById('inputNombre');
let inputEmail = document.getElementById('inputEmail');
let inputAsunto = document.getElementById('inputAsunto');
let inputMensaje = document.getElementById('inputMensaje');

let nombreLabel = document.getElementById('nombreLabel');
let emailLabel = document.getElementById('emailLabel');
let asuntoLabel = document.getElementById('asuntoLabel');
let mensajeLabel = document.getElementById('mensajeLabel');

inputNombre.onclick = function (){
    nombreLabel.classList.add('contact__label--active');
    emailLabel.classList.remove('contact__label--active');
    asuntoLabel.classList.remove('contact__label--active');
    mensajeLabel.classList.remove('contact__label--active');
    
    inputNombre.classList.add('contact__input--active');
    inputEmail.classList.remove('contact__input--active');
    inputAsunto.classList.remove('contact__input--active');
    inputMensaje.classList.remove('contact__input--active');
}

inputEmail.onclick = function (){
    nombreLabel.classList.remove('contact__label--active');
    emailLabel.classList.add('contact__label--active');
    asuntoLabel.classList.remove('contact__label--active');
    mensajeLabel.classList.remove('contact__label--active');

    inputNombre.classList.remove('contact__input--active');
    inputEmail.classList.add('contact__input--active');
    inputAsunto.classList.remove('contact__input--active');
    inputMensaje.classList.remove('contact__input--active');
}

inputAsunto.onclick = function (){
    nombreLabel.classList.remove('contact__label--active');
    emailLabel.classList.remove('contact__label--active');
    asuntoLabel.classList.add('contact__label--active');
    mensajeLabel.classList.remove('contact__label--active');

    inputNombre.classList.remove('contact__input--active');
    inputEmail.classList.remove('contact__input--active');
    inputAsunto.classList.add('contact__input--active');
    inputMensaje.classList.remove('contact__input--active');
}

inputMensaje.onclick = function (){
    nombreLabel.classList.remove('contact__label--active');
    emailLabel.classList.remove('contact__label--active');
    asuntoLabel.classList.remove('contact__label--active');
    mensajeLabel.classList.add('contact__label--active');

    inputNombre.classList.remove('contact__input--active');
    inputEmail.classList.remove('contact__input--active');
    inputAsunto.classList.remove('contact__input--active');
    inputMensaje.classList.add('contact__input--active');
}