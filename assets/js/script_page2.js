var searchLocation = localStorage.getItem("city");
var $breweryDisplay = document.querySelector("#brewery-display");
var $breweryTour = document.querySelector("#stops");
var tourBtn = document.querySelector("testing");

// pulling weather data from open weather api
function getWeather(){
    //debugging
    console.log(searchLocation);

    var responseUrl = "http://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "5900a658e9006d2a5eb37e656c2e92d5";    
    responseUrl += "q=" + searchLocation + "&appid=" + apiKey + "&units=metric";

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
        for(var i=0; i<data.length; i++){
            var $breweryData = document.createElement("li");
            $breweryData.textContent += 'Name : ' +  data[i].name + ' | Postal Code:' + data[i].postal_code + ' | Address: ' + data[i].street  + ' | Website: ' + data[i].website_url;
            $breweryData.classList.add("brewery-result");
            $breweryData.setAttribute("data-value", i);
            $breweryDisplay.appendChild($breweryData);

            }
})

}

function addToTour(){
    $breweryTour.textContent = "";
    var responseUrl = "https://api.openbrewerydb.org/breweries?";
    responseUrl += "by_city=" + searchLocation + "&page=1" + "&per_page=1";

    $.getJSON(responseUrl, function(data){
        for(var i=0; i<data.length; i++){
            var $brewerySelected = document.createElement("li");
            $brewerySelected.textContent += 'Name : ' +  data[i].name + ' | Postal Code:' + data[i].postal_code + ' | Address: ' + data[i].street  + ' | Website: ' + data[i].website_url;
            $brewerySelected.classList.add("brewery-result");
            $brewerySelected.setAttribute("data-value", i);
            $breweryTour.appendChild($brewerySelected);

            }
})
}

$(document).ready(getWeather());
tourBtn.addEventListener("click",addToTour());