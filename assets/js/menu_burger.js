const burger = document.getElementById("burger");
const nav = document.getElementById("nav");
const navLinks = nav.querySelectorAll("a, button");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("active");

  // Animation des liens
  navLinks.forEach((link, index) => {
    if (nav.classList.contains("active")) {
      link.style.animation = `navFade 0.5s ease forwards ${index * 0.1 + 0.2}s`;
    } else {
      link.style.animation = "";
    }
  });
});
