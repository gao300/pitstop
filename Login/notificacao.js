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
cartBtn?.addEventListener('click', () => {
  window.location.href = '../Carrinho/carrinho_produtos.html';
});

// Redirecionamento ao clicar no botão de login
loginBtn?.addEventListener('click', () => {
  window.location.href = '../Login/login.html';
});

// Alternar visibilidade do menu navbar
menuBtnIcon?.addEventListener('click', () => {
  navbar?.classList.toggle('active');
});

// Controle do menu lateral
menuBtn?.addEventListener('click', () => {
  sidebar?.classList.toggle('active');
});

// Alternar visibilidade do formulário de busca
searchBtn?.addEventListener('click', () => {
  if (searchForm) {
    const isVisible = searchForm.classList.contains('visible');
    searchForm.style.transform = isVisible ? 'scaleY(0)' : 'scaleY(1)';
    searchForm.style.opacity = isVisible ? '0' : '1';
    searchForm.style.visibility = isVisible ? 'hidden' : 'visible';
    searchForm.classList.toggle('visible');
  }
});

// Configuração do slideshow
let slideIndex = 1; // Inicia no primeiro slide
let autoSlideInterval = null; // Variável para controlar o intervalo automático

function showSlides(n) {
  const slides = document.querySelectorAll('.mySlides');
  const dots = document.querySelectorAll('.dot');

  if (slides.length === 0) return; // Caso não existam slides

  // Ajusta o índice
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Esconde todos os slides
  slides.forEach((slide) => (slide.style.display = 'none'));

  // Remove a classe "active" de todos os dots
  dots.forEach((dot) => dot.classList.remove('active'));

  // Mostra o slide atual e marca o dot correspondente
  slides[slideIndex - 1].style.display = 'block';
  if (dots.length) dots[slideIndex - 1].classList.add('active');
}

function plusSlides(n) {
  clearInterval(autoSlideInterval); // Pausa o autoplay ao avançar manualmente
  showSlides((slideIndex += n));
  startAutoSlide(); // Reinicia o autoplay após interação manual
}

function currentSlide(n) {
  clearInterval(autoSlideInterval); // Pausa o autoplay ao selecionar manualmente
  showSlides((slideIndex = n));
  startAutoSlide(); // Reinicia o autoplay após interação manual
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showSlides((slideIndex += 1));
  }, 10000); // Troca de slide a cada 10 segundos
}

// Inicializa o slideshow
document.addEventListener('DOMContentLoaded', () => {
  const slidesExist = document.querySelectorAll('.mySlides').length > 0;
  if (slidesExist) {
    showSlides(slideIndex);
    startAutoSlide();
  }
});

// Verificar notificações
function verificarDivs() {
  const mainContainer = document.getElementById('mainContainer');
  const divs = mainContainer?.querySelectorAll('.ndiv') || [];
  let noDivsMessage = document.getElementById('noDivsMessage');
  const myButton = document.getElementById('removeAllButton');

  if (!mainContainer || !myButton) return;

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
    if (noDivsMessage) noDivsMessage.style.display = 'none';
  }
}

// Remover notificação individual
function removerDiv(button) {
  const divToRemove = button.parentElement;
  divToRemove?.remove();
  verificarDivs();
}

// Remover todas as notificações
document.getElementById('removeAllButton')?.addEventListener('click', () => {
  const allDivs = document.querySelectorAll('.ndiv');
  allDivs.forEach((div) => div.remove());
  verificarDivs();
});
