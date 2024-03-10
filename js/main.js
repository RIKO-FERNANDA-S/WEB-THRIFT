const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
    navbar.classList.toggle("nav-scroll", this.window.scrollY > 10)
})