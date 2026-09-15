const canvas = document.getElementById("areaJuego");
const contexto = canvas.getContext("2d");

function graficarGato() {
    contexto.fillStyle = "blue";
    contexto.fillRect(200, 200, 100, 100);
}