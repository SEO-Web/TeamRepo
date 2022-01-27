var searchLocation = localStorage.getItem("city");
var $breweryDisplay = document.querySelector("#brewery-display");
var $breweryTour = document.querySelector("#stops");
//var tourBtn = document.querySelector("testing");
var $location = $(".location");

// pulling weather data from open weather api
function getWeather(){
    //debugging
    //console.log(searchLocation);

    var responseUrl = "http://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "5900a658e9006d2a5eb37e656c2e92d5";    
    responseUrl += "q=" + searchLocation + "&appid=" + apiKey + "&units=metric";

    //console.log(responseUrl)
    $.getJSON(responseUrl, function(data){
        //debugging
        console.log(data);

        var fareheight = (data.main.temp*9/5)+32;
        var knot = data.wind.speed/1.852;    
        $("#city-search").text(searchLocation);
        $("#temp").text(Math.round(data.main.temp) + ' °Celsius / ' + Math.round(fareheight) + ' °Fareheight');
        $("#wind").text((data.wind.speed*3.6).toFixed(1) + ' km/h / '+ (data.wind.speed/0.44704).toFixed(1) + 'mph ' + knot.toFixed(1) + ' knot');
        // weather description
        $("#humid").text(data.main.humidity + '%' + data.weather[0].main);

});
getBrewery();
}

// pull data from open brewery api
function getBrewery(){
    $breweryDisplay.textContent = "";
    var responseUrl = "https://api.openbrewerydb.org/breweries?";
    responseUrl += "by_city=" + searchLocation + "&page=1";

    $.getJSON(responseUrl, function(data){
        //debugging
        console.log(data);
        localStorage.setItem("data", JSON.stringify(data));
        
        for(var i=0; i<data.length; i++){

            //add detail of each brewery
            var $breweryData = document.createElement("p");
            //add button to Add tour
            var $selectBtn = document.createElement("button");

            //detail of each brewery
            $breweryData.textContent += 'Name : ' +  data[i].name + ' | Postal Code:' + data[i].postal_code + ' | Address: ' + data[i].street  + ' | Website: ' + data[i].website_url;
            $breweryData.classList.add("brewery-result");
        var filteredPubs = data.filter(elem => elem.latitude && elem.longitude)
        localStorage.setItem("data", JSON.stringify(filteredPubs));
        
        for(var i=0; i<filteredPubs.length; i++){
            var $breweryData = document.createElement("li");
            $breweryData.textContent += 'Name : ' +  filteredPubs[i].name + ' | Postal Code:' + filteredPubs[i].postal_code + ' | Address: ' + filteredPubs[i].street + ' | Website: ' + filteredPubs[i].website_url + ' | Latititude: ' + filteredPubs[i].latitude + ' | Longitude: ' + filteredPubs[i].longitude;
            $breweryData.classList.add("breweryResult");
            $breweryData.setAttribute("data-value", i);

            //button to Add tour
            $selectBtn.classList.add("tour-btn");
            $selectBtn.setAttribute("id", i);
            $selectBtn.textContent = 'Add to Tour >';

            //eventlistener for the button
            $selectBtn.addEventListener("click",addToTour);

            $breweryDisplay.appendChild($breweryData);
            $breweryDisplay.appendChild($selectBtn);
            
            }
})

}

// WIP
function addToTour(){
    $breweryTour.textContent = "";
    var responseUrl = "https://api.openbrewerydb.org/breweries?";
    responseUrl += "by_city=" + searchLocation + "&page=1" + "&per_page=1";

    $.getJSON(responseUrl, function(data){

        for(var i=0; i<data.length; i++){
            var $brewerySelected = document.createElement("p");
            $brewerySelected.textContent += 'Name : ' +  data[i].name + ' | Postal Code:' + data[i].postal_code + ' | Address: ' + data[i].street  + ' | Website: ' + data[i].website_url;
            $brewerySelected.classList.add("tour");
            $brewerySelected.setAttribute("data-value", i);
            $breweryTour.appendChild($brewerySelected);
            }
})
}

function testin(){
    console.log("added");
}

$(document).ready(getWeather());
