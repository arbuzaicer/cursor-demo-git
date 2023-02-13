const MAX_SCROLL = 55;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (Math.floor(window.scrollY) > MAX_SCROLL) {
    header.classList.add("header-active");
  } else {
    header.classList.remove("header-active");
  }
});
