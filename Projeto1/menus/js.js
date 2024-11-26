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