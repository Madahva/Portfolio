function myFunction() {
    let navLinks = document.getElementById("navLinks");
    if (navLinks.style.display === "block") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "block";
    }

    navLinks.onclick = function () {
        navLinks.style.display = "none";
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

inputNombre.onclick = function () {
    nombreLabel.classList.add('contact__label--active');
    inputNombre.classList.add('contact__input--active');
}
document.getElementById('nombre').addEventListener("blur", function () {
    nombreLabel.classList.remove('contact__label--active');
    inputNombre.classList.remove('contact__input--active');
});


inputEmail.onclick = function () {
    emailLabel.classList.add('contact__label--active');
    inputEmail.classList.add('contact__input--active');
}
document.getElementById('email').addEventListener("blur", function () {
    emailLabel.classList.remove('contact__label--active');
    inputEmail.classList.remove('contact__input--active');
});

inputAsunto.onclick = function () {
    asuntoLabel.classList.add('contact__label--active');
    inputAsunto.classList.add('contact__input--active');
}
document.getElementById('asunto').addEventListener("blur", function () {
    asuntoLabel.classList.remove('contact__label--active');
    inputAsunto.classList.remove('contact__input--active');
});

inputMensaje.onclick = function () {
    mensajeLabel.classList.add('contact__label--active');
    inputMensaje.classList.add('contact__input--active');
}
document.getElementById('mensaje').addEventListener("blur", function () {
    mensajeLabel.classList.remove('contact__label--active');
    inputMensaje.classList.remove('contact__input--active');
});



let btnScrollHaciaArriba = document.getElementById("btn__ir-arriba");

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnScrollHaciaArriba.style.display = "block";
    } else {
        btnScrollHaciaArriba.style.display = "none";
    }
}

btnScrollHaciaArriba.onclick = function () {
    document.documentElement.scrollTo({
        top: 0
    })
}