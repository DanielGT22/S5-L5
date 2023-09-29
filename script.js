const header = document.querySelector("header");
const button = document.querySelector(".right button");
function cambiaColore() {
  const pScroll = window.scrollY;
  const threshold = 350;

  if (pScroll >= threshold) {
    header.classList.add("header1");
    button.style.backgroundColor = "#1A8917";
  } else if (pScroll < threshold) {
    header.classList.remove("header1");
    button.style.backgroundColor = "black";
  }
}

window.addEventListener("scroll", cambiaColore);
