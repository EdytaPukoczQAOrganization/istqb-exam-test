//Historia 1: hacemos la función para el formulario de registro
function registrarse() {
    let name = document.getElementById("welcomename").value;
    let surname = document.getElementById("welcomesurname").value;
    let mensaje = "Bienvenid@, " + name + " "+ surname;
    
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
    if(formulario.checkValidity()){
        registrarse();
        //Como los datos son válidos se muestra la sección Examen
        document.getElementById("exam").style.display = "block";
    }

    else{
        document.getElementById("mensaje").textContent = "El campo es obligatorio y tiene que tener 3 y 30 caracteres";
    }
}

//Historia 2: Mostrar la respuesta correcta
function corregirRespuesta() {
    //Recogemos los valores
    let respuesta = document.getElementById("respuestaExamen").value;

    //Según si la respuesta es correcta o no, damos una respuesta u otra
    if(respuesta === "respuesta1") {
        mensaje = 2;
        
    }

    else if(respuesta === "respuesta2" ) {
        mensaje = -1;
    }

    else if(respuesta === "respuesta3" ) {
        mensaje = -1;
    }

    else if(respuesta === "respuesta4" ) {
        mensaje = 0;
    }

    document.getElementById("puntuacion").textContent = "Tu puntuación: " + mensaje;

}