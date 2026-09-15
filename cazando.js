const canvas = document.getElementById("areaJuego");
const contexto = canvas.getContext("2d");

let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

const altoGato = 100;
const anchoGato = 100;
const altoComida = 50;
const anchoComida = 50;

function graficarRectangulo(x, y, ancho, alto, color) {
    contexto.fillStyle = color;
    contexto.fillRect(x, y, ancho, alto);
}

function graficarGato() {
    graficarRectangulo(
        gatoX,
        gatoY,
        anchoGato,
        altoGato,
        "gray"
    );
}

function graficarComida() {
    graficarRectangulo(
        comidaX,
        comidaY,
        anchoComida,
        altoComida,
        "red"
    );
}

function iniciarJuego() {

    // Gato centrado
    gatoX = (canvas.width - anchoGato) / 2;
    gatoY = (canvas.height - altoGato) / 2;

    // Comida en la esquina inferior derecha
    comidaX = canvas.width - anchoComida;
    comidaY = canvas.height - altoComida;

    graficarGato();
    graficarComida();
}



