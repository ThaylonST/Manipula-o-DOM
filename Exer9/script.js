document.addEventListener('DOMContentLoaded', () => {
    const imagem = document.getElementById('imagem');
    const esconderButton = document.getElementById('esconderButton');
    const mostrarButton = document.getElementById('mostrarButton');

    
    esconderButton.addEventListener('click', () => {
        imagem.style.display = 'none'; 
    });

    
    mostrarButton.addEventListener('click', () => {
        imagem.style.display = 'block'; 
    });
});
