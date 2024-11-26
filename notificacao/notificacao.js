function verificarDivs() {

    const mainContainer = document.getElementById('mainContainer');
    const divs = mainContainer.querySelectorAll('.ndiv');
    let noDivsMessage = document.getElementById('noDivsMessage');
    const myButton = document.getElementById('removeAllButton');


    if (divs.length === 0) {
        myButton.disabled = true;
        if (!noDivsMessage) {
            noDivsMessage = document.createElement('p');
            noDivsMessage.id = 'noDivsMessage';
            noDivsMessage.textContent = 'No new notifications';
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
}

function removerDiv(button) {

    const divToRemove = button.parentElement;

    if (divToRemove) {
        divToRemove.remove();
    }
    verificarDivs()
}

document.getElementById('removeAllButton').addEventListener('click', function () {

    const allDivs = document.querySelectorAll('.ndiv');
    
    allDivs.forEach(div => div.remove());
    verificarDivs()
});