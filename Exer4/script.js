const img = document.querySelector("#img");
const diminuir = document.querySelector("#Diminuir");
const aumentar = document.querySelector("#Aumentar");

aumentar.addEventListener("click", () =>{

    let larguraAtual = parseInt(window.getComputedStyle(img).width);
    img.style.width = (larguraAtual + 10) + "px";

});

diminuir.addEventListener('click', () => {
    let larguraAtual = parseInt(window.getComputedStyle(img).width);
    img.style.width = (larguraAtual - 10) + 'px';
});