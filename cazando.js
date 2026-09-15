const canvas = document.getElementById("areaJuego");
const contexto = canvas.getContext("2d");

let gatoX = 200;
let gatoY = 200;
let comidaX = 450;
let comidaY = 450;

const altoGato = 100;
const anchoGato = 100;
const altoComida = 50;
const anchoComida = 50;

function graficarGato() {
    contexto.fillStyle = "blue";
    contexto.fillRect(gatoX, gatoY, anchoGato, altoGato);
}

function graficarComida() {
    contexto.fillStyle = "red";
    contexto.fillRect(comidaX, comidaY, anchoComida, altoComida);
}

function iniciarJuego() {
    graficarGato();
    graficarComida();
}
