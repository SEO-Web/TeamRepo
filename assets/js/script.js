// What to do about js files - do we have one for each html page so dont get errors about event listeners that are related to a different page?

// modal element selectors
var mapModal = document.getElementById("map-modal");
var modalBTN = document.getElementById("modal-btn");
var searchBTN = document.getElementById("search-btn");
var formEl = document.getElementById("city-search");
var closeEl = document.getElementById("closeBtn");
var ageModal = document.getElementById("age-modal");
var noBtn = document.getElementById("no-btn");
var yesBtn = document.getElementById("yes-btn");
var tooYoung = document.getElementById("underage");
var mainSection = document.getElementById("main-section")

/* Need code so that uses the value of search input  */

modalBTN.addEventListener("click", function () {
    mapModal.style.display = "block";
})

closeEl.addEventListener("click", function () {
    mapModal.style.display = "none";
})

// Close modal when ok clicked
function locationSearchTerm(event) {
    event.preventDefault();
  
    //var searchInputVal = document.querySelector('#search-input').value;
    var searchLocation = document.getElementById("location").value;
    
    console.log(searchLocation)
  
    if (!searchLocation) {
      console.error('You need to search for somewhere'); //what to put here to alert user to search for somewhere? As said no alerts
      return;
    }
    localStorage.setItem('city', searchLocation);
  
    location.assign("./pub-search.html");
}
  
formEl.addEventListener("submit", locationSearchTerm);

yesBtn.addEventListener("click", function (event) {
    event.preventDefault();
    ageModal.style.display = "none";
    mainSection.style.display = "block"
})

noBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var warning = document.createElement("p");
    warning.classList.add("mt-3", "leading-6", "font-medium", "text-gray-900")
    warning.textContent = "You are too young to enter the website.";
    tooYoung.append(warning);
})

