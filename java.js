let tamanhoFonte = 16;
const texto = document.getElementById("texto");

function aumentarTexto() {
    tamanhoFonte += 2;
    texto.style.fontSize = tamanhoFonte + "px";
}

function diminuirTexto() {
    tamanhoFonte -= 2;
    texto.style.fontSize = tamanhoFonte + "px";
}
