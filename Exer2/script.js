var botao = document.querySelector("#botao");
var meuCampo = document.querySelector("#meuCampo");
var texto = document.querySelector("#texto");

botao.addEventListener("click", function(){

    texto.textContent = meuCampo.value;

})