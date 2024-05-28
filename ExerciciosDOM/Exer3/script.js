document.querySelector("#botao").addEventListener("click", function(){
    var novoItem = document.createElement("li"); 

    novoItem.textContent = "Novo item da lista"; 

    document.querySelector("#lista").appendChild(novoItem);
});