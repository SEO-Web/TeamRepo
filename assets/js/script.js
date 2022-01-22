// button to open nav bar on smaller screens
var btn = document.querySelector(".mobile-menu-button");
var menu = document.querySelector(".mobile-menu");

// modal element selectors
var mapModal = document.getElementById("map-modal");
var modalBTN = document.getElementById("modal-btn");
var searchBTN = document.getElementById("search-btn");
var formEl = document.getElementById("city-search")

//Modal search value
//var searchLocation = document.getElementById("location").value

/* Need code so that uses the value of search input  */

// Open modal when button is clicked
btn.addEventListener("click", function () {
    menu.classList.toggle("hidden");
});

modalBTN.addEventListener("click", function () {
    mapModal.style.display = "block";
})

// Close modal when ok clicked
function locationSearchTerm(event) {
    event.preventDefault();
  
    //var searchInputVal = document.querySelector('#search-input').value;
    var searchLocation = document.getElementById("location").value
    
    console.log(searchLocation)
  
    if (!searchLocation) {
      console.error('You need to search for somewhere');
      return;
    }
    localStorage.setItem('city', searchLocation)
  
    location.assign("./pub-search.html");
}
  
formEl.addEventListener("submit", locationSearchTerm)

localStorage.setItem('city', searchLocation)