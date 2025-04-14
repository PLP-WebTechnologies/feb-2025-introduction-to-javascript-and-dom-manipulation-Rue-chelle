// change heading

document.addEventListener("DOMContentLoaded", () => {
  const homeHeading = document.querySelector(".home h2");
  homeHeading.textContent = "Discover Sparkle Within";
});

// Modify css style : Highlight product cards upon loading

const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {
  card.classList.add("highlight");
});

// Toggle message on button press

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle-msg");
  const message = document.getElementById("hidden-msg");

  toggleButton.addEventListener("click", () => {
    message.classList.toggle("hidden");
  });
});
