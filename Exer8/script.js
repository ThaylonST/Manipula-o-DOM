document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    const statusParagrafo = document.getElementById('statusParagrafo');

   
    checkbox.addEventListener('change', () => {
       
        if (checkbox.checked) {
            
            statusParagrafo.textContent = "Checkbox marcada";
        } else {
            
            statusParagrao.textContent = "Checkbox desmarcada";
        }
    });
});
