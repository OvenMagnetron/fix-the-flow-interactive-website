const body = document.querySelector('body'),
  sidebar = body.querySelector('nav'),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");


toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";

  }
});

// carrousel 

document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const card = carousel.querySelector(".card");
  const cardWidth = card.offsetWidth;
  const numCardsToShow = 1; // Aantal kaarten om te laten zien bij elke klik
  const arrowBtns = document.querySelectorAll(".wrapper button");

  // Bereken de breedte van de kaarten die getoond moeten worden
  const cardsToScrollWidth = numCardsToShow * cardWidth;

  // Voeg event listeners toe voor de pijlknoppen om de carousel naar links en rechts te scrollen
  arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (btn.id == "left") {
        if (carousel.scrollLeft <= 0) {
          // Als we aan het begin zijn, scroll naar het einde.
          carousel.scrollLeft = carousel.scrollWidth;
        } else {
          carousel.scrollLeft -= cardsToScrollWidth;
        }
      } else {
        if (carousel.scrollLeft + carousel.clientWidth + cardsToScrollWidth >= carousel.scrollWidth) {
          // Als we aan het einde zijn, ga terug naar het begin.
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += cardsToScrollWidth;
        }
      }
    });
  });
});

//   end carrousel

// Test mobiel
const sidebarMobile = document.querySelector('.sidebar');
const home = document.querySelector('.home');

function toggleMobileSidebar() {
  // Check if the viewport width is less than or equal to 600px (mobile)
  if (window.innerWidth <= 600) {
    // Check if the sidebar has the "close" class (active sidebar)
    if (sidebarMobile.classList.contains('close')) {
      // Disable scrolling on the home element
      home.style.display = 'inherit';
    } else {
      // Enable scrolling on the home element
      home.style.display = 'none';
    }
  } else {
    // If viewport width is larger than 600px, enable scrolling on the home element
    home.style.display = 'inherit';
  }
}

// Add an event listener for window resize
window.addEventListener('resize', toggleMobileSidebar);

// Initial call to set the initial state based on viewport width
toggleMobileSidebar();
