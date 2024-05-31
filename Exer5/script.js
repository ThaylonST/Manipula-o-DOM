document.addEventListener('DOMContentLoaded', () => {
    const removeButton = document.getElementById('removeButton');
    const itemList = document.getElementById('itemList');

    removeButton.addEventListener('click', () => {
        // Remove todos os itens da lista
        while (itemList.firstChild) {
            itemList.removeChild(itemList.firstChild);
        }
    });
});
