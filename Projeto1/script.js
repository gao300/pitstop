let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('.search-form');
let searchBtn = document.querySelector('#search-btn');
let loginBtn = document.getElementById('login-btn');
let cartbtn = document.getElementById('cart-btn');

// Adicionando um evento de clique para redirecionar
cartbtn.onclick = function() {
  window.location.href = './Carrinho/carrinho_produtos.html'; // Redireciona para a página
}
loginBtn.onclick = function() {
    window.location.href = './Login/login.html'; // Redireciona para a página
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

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  // Adjust slide index if out of bounds
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Remove "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Show the current slide and set its dot as active
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Automatic slide change every 10 seconds
function autoShowSlides() {
  let slides = document.getElementsByClassName("mySlides");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  
  // Reset the slide index if it goes beyond the number of slides
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex-1].style.display = "block";
  
  setTimeout(autoShowSlides, 10000); // Change slide every 10 seconds
}

// Initialize automatic slide show
autoShowSlides();
