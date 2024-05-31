document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('itemList');
    const reverterButton = document.getElementById('reverterButton');

    
    reverterButton.addEventListener('click', () => {
       
        const itemsArray = Array.from(itemList.children);
       
        const reversedItemsArray = itemsArray.reverse();
       
        itemList.innerHTML = '';
      
        reversedItemsArray.forEach(item => {
            itemList.appendChild(item);
        });
    });
});
