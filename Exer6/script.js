document.addEventListener('DOMContentLoaded', () => {
    const counterParagraph = document.getElementById('counter');
    const incrementButton = document.getElementById('incrementButton');
    

    let count = 0;
    
   
    counterParagraph.textContent = count;
    
   
    incrementButton.addEventListener('click', () => {
       
        count++;
     
        counterParagraph.textContent = count;
    });
});
