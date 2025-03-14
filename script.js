document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("toggle");
    });
  } else {
    console.error("Hamburger or NavLinks not found in the DOM");
  }

  document.querySelectorAll(".pack-card .btn").forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const packName = e.target.closest(".pack-card").querySelector("h4").textContent;
      alert(`Downloading ${packName}... (Placeholder link)`);
    });
  });
});

const logo = document.querySelector(".logo h1");

if (logo) {
  logo.addEventListener("click", () => {
    window.location.href = "index.html";
  });
} else {
  console.error(".logo h1 not found in the DOM");
}
