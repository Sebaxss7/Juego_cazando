const canvas = document.getElementById("areaJuego");
const contexto = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;
let puntaje = 0;
let temporizador;
let tiempo = 10;
const altoGato = 150;
const anchoGato = 100;
const altoComida = 75;
const anchoComida = 70;
const imagenLeon = new Image();
imagenLeon.src = "leon.png";
const imagenComida = new Image();
imagenComida.src = "comida.png";

function graficarRectangulo(x, y, ancho, alto, color) {
    contexto.fillStyle = color;
    contexto.fillRect(x, y, ancho, alto);
}

function graficarGato() {
    contexto.drawImage(
        imagenLeon,
        gatoX,
        gatoY,
        anchoGato,
        altoGato
    );
}

function graficarComida() {
    contexto.drawImage(
        imagenComida,
        comidaX,
        comidaY,
        anchoComida,
        altoComida
    );
}

function iniciarJuego() {

    // Gato centrado
    gatoX = (canvas.width - anchoGato) / 2;
    gatoY = (canvas.height - altoGato) / 2;

    // Comida en la esquina inferior derecha
    comidaX = canvas.width - anchoComida;
    comidaY = canvas.height - altoComida;

    tiempo = 10;
    puntaje = 0;
    mostrarEnSpan("tiempo", tiempo);
    mostrarEnSpan("puntos", puntaje);

    limpiarCanva();
    graficarGato();
    graficarComida();

    temporizador = setInterval(restarTiempo, 1000);
}

function restarTiempo() {
    tiempo = tiempo - 1;
    mostrarEnSpan("tiempo", tiempo);

    // Condición de derrota: tiempo llega a 0
    if (tiempo === 0) {
        clearInterval(temporizador);
        alert("¡Game Over!");
    }
}

 function limpiarCanva() {
    contexto.clearRect(0, 0, canvas.width, canvas.height);
}

function detectarColision() {
     if (gatoX < comidaX + anchoComida &&
             gatoX + anchoGato > comidaX &&
             gatoY < comidaY + altoComida &&
             gatoY + altoGato > comidaY) {
            puntaje = puntaje + 1;

        // Llama a la función de utilitarios.js para actualizar la pantalla
        mostrarEnSpan("puntos", puntaje);
        if (puntaje === 6) {
            clearInterval(temporizador);
            alert("¡Felicidades, ganaste!");
        } else {
        reposicionarComida();
    }
}
}

function moverIzquierda() {
    gatoX = gatoX - 10;
    actualizarJuego();
}

function moverDerecha() {
    gatoX = gatoX + 10;
    actualizarJuego();
}

function moverArriba() {
    gatoY = gatoY - 10;
    actualizarJuego();
}

function moverAbajo() {
    gatoY = gatoY + 10;
    actualizarJuego();
}

function reposicionarComida() {
    let maxX = canvas.width - anchoComida;
    let maxY = canvas.height - altoComida;

    // Llama a la función de utilitarios.js
    comidaX = generarAleatorio(0, maxX);
    comidaY = generarAleatorio(0, maxY);
}

 function actualizarJuego() {
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}

function reiniciar() {
    clearInterval(temporizador);
    tiempo = 10;
    puntaje = 0;
    iniciarJuego();
}
