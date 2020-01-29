const toggleMenu = document.querySelector(".menu");
const toggleMenuButton = document.querySelector(".menu__toggle");
const closeMenuButton = document.querySelector(".menu__toggle--close");
const modalButton = document.querySelector(".modal__button");
const body = document.body;

toggleMenuButton.addEventListener("click", toggleMenuHandler);
document.addEventListener(
  "click",
  e => {
    e.preventDefault();

    if (
      e.target.className === "navbar__list__item__link" ||
      e.target.className === "menu__list__item__link" ||
      e.target.className === "social__media__link" ||
      e.target.className === "legal__link"
    ) {
      const modal = document.createElement("section");
      modal.className = "modal";
      modal.innerHTML = `<article class="modal__box">
      <h1>Hello visitor</h1>
      <p class="modal__message">
        Links do not work yet on this website because it is intended to
        resemble just a landing page
      </p>
      <button class="modal__button">Ok, get me back to the page</button>
     </article>`;
      body.appendChild(modal);
      body.style.overflow = "hidden";
    }
  },
  false
);

body.addEventListener("click", e => {
  e.preventDefault();
  if (e.target.className === "modal__button") {
    body.removeChild(document.querySelector(".modal"));
    body.style.overflow = "scroll";
  }
});

// Function for opening/closing the menu on mobile/tablet
function toggleMenuHandler(e) {
  e.preventDefault();

  if (toggleMenu.classList.contains("hide")) {
    toggleMenu.classList.remove("hide");
    body.className = "overflow-hidden";
  } else {
    toggleMenu.classList.add("hide");
    body.classList.remove("overflow-hidden");
  }

  toggleMenuButton.classList.contains("menu__toggle--close")
    ? toggleMenuButton.classList.remove("menu__toggle--close")
    : toggleMenuButton.classList.add("menu__toggle--close");
}
