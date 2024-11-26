let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let loginBtn = document.getElementById('login-btn');
let cartbtn = document.getElementById('cart-btn');

// Adicionando um evento de clique para redirecionar
cartbtn.onclick = function() {
  window.location.href = '../Carrinho/carrinho_produtos.html'; // Redireciona para a página
}
loginBtn.onclick = function() {
    window.location.href = '../Login/login.html'; // Redireciona para a página
  }

// Toggle navbar visibility
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
};

// Toggle search form visibility
searchBtn.onclick = () => {
    searchForm.style.transform = searchForm.style.transform === 'scaleY(1)' ? 'scaleY(0)' : 'scaleY(1)';
    searchForm.style.opacity = searchForm.style.opacity === '1' ? '0' : '1';
    searchForm.style.visibility = searchForm.style.visibility === 'visible' ? 'hidden' : 'visible';
};


// script.js
document.addEventListener('DOMContentLoaded', () => {
    const totalElement = document.getElementById('total');
    const removeButtons = document.querySelectorAll('.remove-item');
    const quantityInputs = document.querySelectorAll('.item-quantity');

    // Função para atualizar o total
    function updateTotal() {
        let total = 0;

        // Percorrer cada item do carrinho
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-price').innerText.replace('R$', '').trim());
            const quantity = item.querySelector('.item-quantity').value;
            total += price * quantity;
        });

        totalElement.innerText = `R$ ${total.toFixed(2)}`;
    }

    // Adicionar evento de remoção
    removeButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const item = e.target.closest('.cart-item');
            item.remove();
            updateTotal();  // Atualizar o total após remover o item
        });
    });

    // Adicionar evento de alteração de quantidade
    quantityInputs.forEach(input => {
        input.addEventListener('change', updateTotal);  // Atualizar o total quando a quantidade mudar
    });

    // Inicializar o total na carga da página
    updateTotal();
});
