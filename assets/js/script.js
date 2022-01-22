// button to open nav bar on smaller screens
var btn = document.querySelector("button.mobile-menu-button");
var menu = document.querySelector(".mobile-menu");

// modal element selectors
var mapModal = document.getElementById("map-modal");
var modalBTN = document.getElementById("modal-btn");
var searchBTN = document.getElementById("search-btn");

//Modal search value
var location = document.getElementById("location").value

/* Need code so that uses the value of search input  */

// Open modal when button is clicked
btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

modalBTN.addEventListener("click", function () {
    mapModal.style.display = "block";
})

// Close modal when ok clicked
searchBTN.addEventListener("click", function () {
    document.location.href = "pub-search.html"
})

localStorage.setItem('city', location)