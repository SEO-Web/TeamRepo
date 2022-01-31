var searchLocation = localStorage.getItem("city");
var $breweryDisplay = document.querySelector("#brewery-display");
var $breweryTour = document.querySelector("#stops");
//var tourBtn = document.querySelector("testing");
var $location = $(".location");
var tourCount = 0;
$breweryTour.textContent = "";
// pulling weather data from open weather api
function getWeather() {
    //debugging
    //console.log(searchLocation);
    var responseUrl = "http://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "5900a658e9006d2a5eb37e656c2e92d5";
    responseUrl += "q=" + searchLocation + "&appid=" + apiKey + "&units=metric";
    //console.log(responseUrl)
    $.getJSON(responseUrl, function (data) {
        //debugging
        //console.log(data);
        console.log(responseUrl);
        var farenheight = (data.main.temp * 9 / 5) + 32;
        var knot = data.wind.speed / 1.852;
        $("#city-search").text(searchLocation);
        $("#temp").text(Math.round(data.main.temp) + ' °Celsius / ' + Math.round(farenheight) + ' °Farenheight');
        $("#wind").text((data.wind.speed * 3.6).toFixed(1) + ' km/h / ' + (data.wind.speed / 0.44704).toFixed(1) + 'mph /' + knot.toFixed(1) + ' knot');
        // weather description
        $("#humid").text(data.main.humidity + '%' + data.weather[0].main);
    });
    getBrewery();
}
// pull data from open brewery api
function getBrewery() {
    $breweryDisplay.textContent = "";
    var responseUrl = "https://api.openbrewerydb.org/breweries?";
    responseUrl += "by_city=" + searchLocation + "&page=1";
    $.getJSON(responseUrl, function (data) {
        //debugging
        //console.log(data);

        var filteredPubs = data.filter(elem => elem.latitude && elem.longitude)
        localStorage.setItem("data", JSON.stringify(filteredPubs));

        for (var i = 0; i < filteredPubs.length; i++) {
            //add detail of each brewery
            var $breweryData = document.createElement("p");
            //add button to Add tour
            var $selectBtn = document.createElement("button");
            //detail of each brewery
            $breweryData.textContent += i + 1 + ': ' + 'Name : ' + filteredPubs[i].name + ' | Address: ' + filteredPubs[i].street + ' | Postal Code: ' + filteredPubs[i].postal_code + ' | Website: ' + filteredPubs[i].website_url;
            $breweryData.classList.add("brewery-result");
            $breweryData.setAttribute("data-value", i);
            //button to Add tour
            $selectBtn.classList.add("tour-btn");
            $selectBtn.setAttribute("id", i);
            $selectBtn.setAttribute("data-value", i);
            $selectBtn.textContent = "Add to Tour";
            //eventlistener for the button
            $selectBtn.addEventListener("click", addToTour);
            //append child
            $breweryDisplay.appendChild($breweryData);
            $breweryDisplay.appendChild($selectBtn);
        }
    })
}
// WIP
function addToTour(event) {
    tourCount++;
    console.log("Count : " + tourCount);
    var responseUrl = "https://api.openbrewerydb.org/breweries?";
    responseUrl += "by_city=" + searchLocation + "&page=1";
    $.getJSON(responseUrl, function (data) {
        //get the data attribute (data-value)
        if (tourCount > 5) { }
        else {
            var valueClicked = $(event.target).data('value');
            console.log("Query : " + valueClicked);
            // 4 seperate elements
            var $spacing = document.createElement("br");
            var $number = document.createElement("p");
            var $breweryNameSelected = document.createElement("p");
            var $breweryPostalSelected = document.createElement("p");
            var $breweryAddressSelected = document.createElement("p");
            var $breweryWebsiteSelected = document.createElement("p");
            // content
            $number.textContent = tourCount;
            $breweryNameSelected.textContent += 'Name : ' + data[valueClicked].name;
            $breweryAddressSelected.textContent += 'Address : ' + data[valueClicked].street;
            $breweryPostalSelected.textContent += 'Postal Code : ' + data[valueClicked].postal_code;
            $breweryWebsiteSelected.textContent += 'Website : ' + data[valueClicked].website_url;
            // add class
            $breweryNameSelected.classList.add("tour");
            $breweryAddressSelected.classList.add("tour");
            $breweryPostalSelected.classList.add("tour");
            $breweryWebsiteSelected.classList.add("tour");
            // set data attribute
            $breweryNameSelected.setAttribute("data-value", tourCount);
            $breweryAddressSelected.setAttribute("data-value", tourCount);
            $breweryPostalSelected.setAttribute("data-value", tourCount);
            $breweryWebsiteSelected.setAttribute("data-value", tourCount);
            //append child
            $breweryTour.appendChild($spacing);
            $breweryTour.appendChild($number);
            $breweryTour.appendChild($breweryNameSelected);
            $breweryTour.appendChild($breweryAddressSelected);
            $breweryTour.appendChild($breweryPostalSelected);
            $breweryTour.appendChild($breweryWebsiteSelected);
        }
    })
}
function testin(event) {
}
//onload (Anything to do when loading the page)
$(document).ready(getWeather());
