let ataqueJugador
let ataqueEnemigo

window.addEventListener('load', iniciarJuego)

function iniciarJuego(){
    let botonPersonajeJugador = document.getElementById('boton-personaje')
    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)

    document.getElementById('boton-punio').addEventListener('click', () => seleccionarAtaque('Puño'))
    document.getElementById('boton-patada').addEventListener('click', () => seleccionarAtaque('Patada'))
    document.getElementById('boton-barrida').addEventListener('click', () => seleccionarAtaque('Barrida'))
}

function seleccionarPersonajeJugador() {
    let personajeSeleccionado = ""
    let spanPersonajeJugador = document.getElementById('personaje-jugador')

    if (document.getElementById('zuko').checked) personajeSeleccionado = "Zuko (Fuego)"
    else if (document.getElementById('katara').checked) personajeSeleccionado = "Katara (Agua)"
    else if (document.getElementById('aang').checked) personajeSeleccionado = "Aang (Aire)"
    else if (document.getElementById('toph').checked) personajeSeleccionado = "Toph (Tierra)"
    else {
        alert("Por favor, selecciona un personaje")
        return
    }

    spanPersonajeJugador.innerHTML = personajeSeleccionado
    alert("Has seleccionado a " + personajeSeleccionado)

    seleccionarPersonajeEnemigo()
}

function seleccionarPersonajeEnemigo() {
    const personajes = ["Zuko (Fuego)", "Katara (Agua)", "Aang (Aire)", "Toph (Tierra)"]
    const personajeEnemigo = personajes[Math.floor(Math.random() * personajes.length)]

    document.getElementById('personaje-enemigo').innerHTML = personajeEnemigo
}

function seleccionarAtaque(ataque) {
    ataqueJugador = ataque
    ataqueEnemigo = obtenerAtaqueAleatorio()
    combate()
}

function obtenerAtaqueAleatorio() {
    const ataques = ['Puño', 'Patada', 'Barrida']
    return ataques[Math.floor(Math.random() * ataques.length)]
}

function combate(){
    let resultado = ""
    if(ataqueJugador === ataqueEnemigo){
        resultado = "EMPATE"
    } else if(
        (ataqueJugador === 'Puño' && ataqueEnemigo === 'Barrida') ||
        (ataqueJugador === 'Patada' && ataqueEnemigo === 'Puño') ||
        (ataqueJugador === 'Barrida' && ataqueEnemigo === 'Patada')
    ){
        resultado = "GANASTE"
    } else {
        resultado = "PERDISTE"
    }

    crearMensaje(resultado)
}

function crearMensaje(resultado){
    let sectionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = `Tu personaje atacó con <strong>${ataqueJugador}</strong>, el personaje del enemigo atacó con <strong>${ataqueEnemigo}</strong> ${resultado}`
    sectionMensaje.appendChild(parrafo)
}

function mostrarReglas() {
    const seccion = document.getElementById('seccion-reglas')
    seccion.style.display = seccion.style.display === 'none' ? 'block' : 'none'
}
