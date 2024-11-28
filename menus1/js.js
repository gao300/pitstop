// Obtendo os elementos necessários do DOM
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let loginBtn = document.querySelector('.hbutton'); // Botão "Login"
let cartBtn = document.querySelector('.hpesicon'); // Ícone do carrinho
let menuBtnIcon = document.querySelector('.hpesicon2'); // Ícone do menu (errado no original)
let notiBtn = document.querySelector('.noti-btn'); // Botão de notificações
let menuBtn = document.querySelector('#menu'); // Botão do menu lateral
let sidebar = document.querySelector('#sidebar'); // Menu lateral

// Redirecionamento ao clicar no ícone do carrinho
if (cartBtn) {
  cartBtn.onclick = () => {
    window.location.href = '../Carrinho/carrinho_produtos.html'; // Redireciona para a página do carrinho
  };
}

console.log(notiBtn); // Verifique se o botão foi selecionado corretamente
if (notiBtn) {
  notiBtn.onclick = () => {
    window.location.href = './Login/notificacao.html'; // Redireciona para a página de notificações
  };
}


// Redirecionamento ao clicar no botão de login
if (loginBtn) {
  loginBtn.onclick = () => {
    window.location.href = './Login/login.html'; // Redireciona para a página de login
  };
}

// Alternar visibilidade do menu navbar
if (menuBtnIcon && navbar) {
  menuBtnIcon.onclick = () => {
    navbar.classList.toggle('active');
  };
}

// Controle do menu lateral
if (menuBtn && sidebar) {
  menuBtn.onclick = () => {
    sidebar.classList.toggle('active'); // Alterna o estado do menu
  };
}

// Alternar visibilidade do formulário de busca
if (searchBtn && searchForm) {
  searchBtn.onclick = () => {
    const isVisible = searchForm.style.transform === 'scaleY(1)';
    searchForm.style.transform = isVisible ? 'scaleY(0)' : 'scaleY(1)';
    searchForm.style.opacity = isVisible ? '0' : '1';
    searchForm.style.visibility = isVisible ? 'hidden' : 'visible';
  };
}

function irporlink(tipo) {
  let newImageUrl =
    "https://s1.medias-norauto.pt/images_produits/tyre_comm_txt-conti_ultracontact-1/900x900/pneu-continental-ultracontact-185-65-r15-88-h--2444182.jpg";
  if (tipo == 1){
    newImageUrl = "https://www.dunlopmotorcycletires.com/wp-content/uploads/2021/03/harley2.png"
  }else if (tipo == 2) {
    newImageUrl =
      "https://www.gtradialcommercial.com/wp-content/uploads/sites/15/2018/08/Giti_GDL633FS_30_1500px.jpg";
  }
  const imageButtons = document.querySelectorAll(".image-button img");
  imageButtons.forEach((img) => {
    img.src = newImageUrl;
  });
}

function setActive(linkElement) {

  const links = document.querySelectorAll(".linkt");
  links.forEach((link) => {
    link.classList.remove("active");
  });

  linkElement.classList.add("active");
}