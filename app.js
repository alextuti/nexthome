const toggleMenu = document.querySelector(".menu");
const toggleMenuButton = document.querySelector(".menu-toggle");
const closeMenuButton = document.querySelector(".menu-close");
const body = document.body;

toggleMenuButton.addEventListener("click", toggleMenuHandler);

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

  toggleMenuButton.classList.contains("close-menu-icon")
    ? toggleMenuButton.classList.remove("close-menu-icon")
    : toggleMenuButton.classList.add("close-menu-icon");
}
