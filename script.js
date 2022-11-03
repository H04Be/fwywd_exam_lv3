const burger = document.querySelector(".buger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

console.log(navLinks);

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    console.log(index);
    if (link.style.animation) {
      link.style.animation = ``;
    } else {
      link.style.animation = `navLinksFade 0.5 ease forwards ${
        index / 7 + 0.4
      }s`;
    }
  });
  burger.classList.toggle("toggle");
});
