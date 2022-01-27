var searchLocation = localStorage.getItem("city");
var $breweryDisplay = document.querySelector("#brewery-display");

// pulling weather data from open weather api
function getWeather(){
    //debugging
    console.log(searchLocation);

    var responseUrl = "http://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "5900a658e9006d2a5eb37e656c2e92d5";    
    responseUrl += "q=" + searchLocation + "&appid=" + apiKey + "&units=metric";

    $.getJSON(responseUrl, function(data){
        //debugging
        //console.log(data);

        var fareheight = (data.main.temp*9/5)+32;
        var knot = data.wind.speed/1.852;    
        $("#city-search").text(searchLocation);
        $("#temp").text(Math.round(data.main.temp) + ' °Celsius / ' + Math.round(fareheight) + ' °Fareheight');
        $("#wind").text((data.wind.speed*3.6).toFixed(1) + ' km/h / '+ (data.wind.speed/0.44704).toFixed(1) + 'mph ' + knot.toFixed(1) + ' knot');
        $("#humid").text(data.main.humidity + '%');

});
getBrewery();
}

// pull data from open brewery api
function getBrewery(){
    $breweryDisplay.textContent = "";
    var responseUrl = "https://api.openbrewerydb.org/breweries?";
    responseUrl += "by_city=" + searchLocation;

    $.getJSON(responseUrl, function(data){
        //debugging
        console.log(data);
        var filteredPubs = data.filter(elem => elem.latitude && elem.longitude)
        localStorage.setItem("data", JSON.stringify(filteredPubs));
        
        for(var i=0; i<filteredPubs.length; i++){
            var $breweryData = document.createElement("li");
            $breweryData.textContent += 'Name : ' +  filteredPubs[i].name + ' | Postal Code:' + filteredPubs[i].postal_code + ' | Address: ' + filteredPubs[i].street + ' | Website: ' + filteredPubs[i].website_url + ' | Latititude: ' + filteredPubs[i].latitude + ' | Longitude: ' + filteredPubs[i].longitude;
            $breweryData.classList.add("breweryResult");
            $breweryData.setAttribute("data-value", i);
            $breweryDisplay.appendChild($breweryData);
        }
})
}

$(document).ready(getWeather());