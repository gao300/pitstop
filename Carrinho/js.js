function refazeraconta() {    
    
  const divs = document.querySelectorAll('.item-price');

  const resultSpan = document.getElementById('result');

    let sum = 0;

    divs.forEach(div => {

      const cleanedText = div.textContent
        .replace('€', '')
        .replace(',', '.');

      const number = parseFloat(cleanedText);

      if (!isNaN(number)) {
        sum += number;
      }
    });

    resultSpan.textContent = sum.toFixed(2) + '€';
  }
  
function verificarDivs() {

  const mainContainer = document.getElementById('aquificatexto');
  const mainContainer2 = document.getElementById('cart-container');
  const divs = mainContainer2.querySelectorAll('.cart-items');
  let noDivsMessage = document.getElementById('noDivsMessage');
  const myButton = document.getElementById('fi');


  if (divs.length === 0) {
      myButton.disabled = true;
      if (!noDivsMessage) {
          noDivsMessage = document.createElement('p');
          noDivsMessage.id = 'noDivsMessage';
          noDivsMessage.textContent = 'empty cart';
          mainContainer.appendChild(noDivsMessage);
      } else {
          noDivsMessage.style.display = 'block';
      }
  } else {
      myButton.disabled = false;
      if (noDivsMessage) {
          noDivsMessage.style.display = 'none';
      }
  }
  refazeraconta()
}

function removerDiv(button) {

  const divToRemove = button.parentElement.parentElement;

  if (divToRemove) {
      divToRemove.remove();
  }
  verificarDivs()
}
document.addEventListener('DOMContentLoaded', refazeraconta);