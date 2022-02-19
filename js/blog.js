const hamburgerMenu = document.getElementById("hamburgerMenu");
const navBar = document.querySelector('.navBar');
const navLinks = document.querySelector(".navLinks");
hamburgerMenu.addEventListener("click", () => {
    navBar.classList.toggle("navBarActive");
    navLinks.classList.toggle("opacityVisible");
});