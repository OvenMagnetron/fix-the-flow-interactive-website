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
  const numCardsToShow = 2; // Aantal kaarten om te laten zien bij elke klik
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
        console.log(carousel.scrollLeft, carousel.clientWidth, cardsToScrollWidth, carousel.scrollWidth)
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