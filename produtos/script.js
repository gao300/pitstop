// Seleção dos elementos necessários do DOM
const navbar = document.querySelector('.navbar');
const searchForm = document.querySelector('.search-form');
const searchBtn = document.querySelector('#search-btn');
const loginBtn = document.querySelector('.hbutton'); // Botão "Login"
const cartBtn = document.querySelector('.hpesicon'); // Ícone do carrinho
const menuBtnIcon = document.querySelector('.hpesicon2'); // Ícone do menu
const notiBtn = document.querySelector('.noti-btn'); // Botão de notificações
const menuBtn = document.querySelector('#menu'); // Botão do menu lateral
const sidebar = document.querySelector('#sidebar'); // Menu lateral

// Redirecionamento ao clicar no ícone do carrinho
if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    window.location.href = '../Carrinho/carrinho_produtos.html';
  });
}

// Redirecionamento ao clicar no botão de login
if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    window.location.href = '../Login/login.html';
  });
}

// Alternar visibilidade do menu navbar
if (menuBtnIcon && navbar) {
  menuBtnIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
}

// Controle do menu lateral
if (menuBtn && sidebar) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}

// Alternar visibilidade do formulário de busca
if (searchBtn && searchForm) {
  searchBtn.addEventListener('click', () => {
    const isVisible = searchForm.classList.contains('visible');
    searchForm.style.transform = isVisible ? 'scaleY(0)' : 'scaleY(1)';
    searchForm.style.opacity = isVisible ? '0' : '1';
    searchForm.style.visibility = isVisible ? 'hidden' : 'visible';
    searchForm.classList.toggle('visible');
  });
}

function adicionar(){
    alert("Produto adicionado ao carrinho com sucesso")
}