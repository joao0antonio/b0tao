let tamanhoFonte = 16;
const texto = document.getElementById("texto");

function aumentarTexto() {
    if (tamanhoFonte < 30) {
        tamanhoFonte += 2;
        texto.style.fontSize = tamanhoFonte + "px";
    }
}

function diminuirTexto() {
    if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        texto.style.fontSize = tamanhoFonte + "px";
    }
}
