// What to do about js files - do we have one for each html page so dont get errors about event listeners that are related to a different page?

// modal element selectors
var mapModal = document.getElementById("map-modal");
var modalBTN = document.getElementById("modal-btn");
var searchBTN = document.getElementById("search-btn");
var formEl = document.getElementById("city-search")
var closeEl = document.getElementById("closeBtn")

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
    var searchLocation = document.getElementById("location").value
    
    console.log(searchLocation)
  
    if (!searchLocation) {
      console.error('You need to search for somewhere'); //what to put here to alert user to search for somewhere? As said no alerts
      return;
    }
    localStorage.setItem('city', searchLocation)
  
    location.assign("./pub-search.html");
}
  
formEl.addEventListener("submit", locationSearchTerm)

