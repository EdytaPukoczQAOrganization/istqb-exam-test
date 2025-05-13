//Historia 1: hacemos la función para el formulario de registro
function registrarse() {
    let name = document.getElementById("welcomename").value;
    let surname = document.getElementById("welcomesurname").value;
    let mensaje = "Bienvenid@, " + name + " " + surname;

    //Mostrar el mensaje
    document.getElementById("mensaje").textContent = mensaje.toUpperCase();

    //Ocultar el formulario después de enviar
    document.getElementById("formsingup").style.display = "none";


}

//Historia 1: hacemos la validación del formulario con los campos obligatorios
function registrarseValidado() {
    //Obtenemos el formulario de registrase
    let formulario = document.getElementById("formsingup");

    //Ponemos la condición
    if (formulario.checkValidity()) {
        registrarse();
        //Como los datos son válidos se muestra la sección Examen
        document.getElementById("exam").style.display = "block";
    }

    else {
        document.getElementById("mensaje").textContent = "El campo es obligatorio y tiene que tener 3 y 30 caracteres";
    }
}

//Corregir examen
function corregirExamen() {

    let mensajePunt = 0;
    let puntuacionFinal = 0;

    for (let i = 0; i < 10; i++) {
        mensajePunt = corregirPregunta(i);
        document.getElementById("puntuacion" + i).textContent = "Tu puntuación: " + mensajePunt;
        puntuacionFinal = puntuacionFinal + mensajePunt;
    }

    if (puntuacionFinal < 0) {
        puntuacionFinal = 0;
    }

    if (puntuacionFinal > 12) {
        document.getElementById("puntuacionFinal").style.color = "green";
    }
    else {
        document.getElementById("puntuacionFinal").style.color = "red";
    }
    document.getElementById("puntuacionFinal").textContent = "Tu puntuación final " + puntuacionFinal;
}

//Corregir pregunta
function corregirPregunta(idPregunta) {

    let respuesta = document.getElementById("respuestaExamen" + idPregunta).value;
    let puntos = 0;

    let respuestaCorrecta = ["respuesta1", "respuesta2", "respuesta2", "respuesta3", "respuesta3", "respuesta3", "respuesta3", "respuesta3", "respuesta1", "respuesta3"];

    if (respuesta === "respuesta4") {
        puntos = 0;
    }
    else if (respuesta === respuestaCorrecta[idPregunta]) {
        puntos = 2;
    }
    else {
        puntos = -1;
    }

    return puntos;
}