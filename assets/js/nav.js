// button to open nav bar on smaller screens
var btn = document.getElementById("mobile-menu-button");
var menu = document.getElementById("mobile-menu");// Open modal when button is clicked

btn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});