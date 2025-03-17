let tamanhoFonte = 16;
const texto = document.getElementById("texto");
const botaoAumentar = document.getElementById("aumentar");
const botaoDiminuir = document.getElementById("diminuir");

botaoAumentar.addEventListener("click", () => {
    if (tamanhoFonte < 30) {
        tamanhoFonte += 2;
        texto.style.fontSize = tamanhoFonte + "px";
    }
});

botaoDiminuir.addEventListener("click", () => {
    if (tamanhoFonte > 10) {
        tamanhoFonte -= 2;
        texto.style.fontSize = tamanhoFonte + "px";
    }
});