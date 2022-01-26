var searchLocation = localStorage.getItem("city");
var $breweryDisplay = document.querySelector("#brewery-display");

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
        //console.log(data);

        var fareheight = (data.main.temp*9/5)+32;
        var knot = data.wind.speed/1.852;    
        $("#city-search").text(searchLocation);
        $("#temp").text(Math.round(data.main.temp) + ' °Celsius / ' + Math.round(fareheight) + ' °Fareheight');
        $("#wind").text((data.wind.speed*3.6).toFixed(1) + ' kmh / '+ (data.wind.speed/0.44704).toFixed(1) + 'mph ' + knot.toFixed(1) + ' knots');
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
        //console.log(data);
        localStorage.setItem("data", JSON.stringify(data));
        
        for(var i=0; i<data.length; i++){
            var $breweryData = document.createElement("li");
            $breweryData.textContent += 'Name : ' +  data[i].name + ' | Postal Code:' + data[i].postal_code + ' | Address: ' + data[i].street + ' | Website: ' + data[i].website_url + ' | Latititude: ' + data[i].latitude + ' | Longitude: ' + data[i].longitude;
            $breweryData.classList.add("breweryResult");
            $breweryData.setAttribute("data-value", i);
            $breweryDisplay.appendChild($breweryData);
            
        }
        
})
}

$(document).ready(getWeather());