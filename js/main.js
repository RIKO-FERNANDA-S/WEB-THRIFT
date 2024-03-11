// SCROLL-NAV
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
    navbar.classList.toggle("nav-scroll", this.window.scrollY > 10)
})

// MENU-BAR

function hideSide() {
    const menu = document.querySelector(".sidebar");
    menu.style.display = "none"
}
function showSide() {
    const menu = document.querySelector(".sidebar");
    menu.style.display = "flex"
}