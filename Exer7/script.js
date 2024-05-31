document.addEventListener('DOMContentLoaded', () => {
    const itemInput = document.getElementById('itemInput');
    const addButton = document.getElementById('addButton');
    const itemList = document.getElementById('itemList');
    
    addButton.addEventListener('click', () => {
        const newItemText = itemInput.value.trim();
        
        if (newItemText !== '') {
            const newItem = document.createElement('li');
            newItem.textContent = newItemText;
            itemList.appendChild(newItem);
            itemInput.value = '';
        } else {
            alert('Por favor, insira um item antes de adicionar à lista.');
        }
    });
});
