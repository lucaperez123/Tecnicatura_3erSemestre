function seleccionarPersonajeJugador() {
    let personajeSeleccionado = "";

    if (document.getElementById('zuko').checked) {
        personajeSeleccionado = "Zuko (Fuego)";
    } else if (document.getElementById('katara').checked) {
        personajeSeleccionado = "Katara (Agua)";
    } else if (document.getElementById('aang').checked) {
        personajeSeleccionado = "Aang (Aire)";
    } else if (document.getElementById('toph').checked) {
        personajeSeleccionado = "Toph (Tierra)";
    } else {
        alert("Por favor, selecciona un personaje");
        return;
    }

    alert("Has seleccionado a " + personajeSeleccionado);
}

let botonPersonajeJugador = document.getElementById('boton-personaje');
botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador);
