function increment(){
    const valueButton= document.getElementById('valuebutton');
    let currentvalue = parseInt(valueButton.textContent);
    currentvalue += 1 ;
    valueButton.textContent = currentvalue ;
}
function decrement(){
    const valueButton= document.getElementById('valuebutton');
    let currentvalue = parseInt(valueButton.textContent);
    currentvalue -= 1 ;
    valueButton.textContent = currentvalue ;
}