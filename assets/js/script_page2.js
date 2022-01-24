var searchLocation = localStorage.getItem("city");



// putting weather data from open weather api
//TODO: button to change weather display?(C,F,Kelvin)
function getWeather(){
    //var display = "";
    var position = searchLocation;
    console.log(searchLocation);
    var responseUrl = "http://api.openweathermap.org/data/2.5/weather?";
    const apiKey = "5900a658e9006d2a5eb37e656c2e92d5";    
    responseUrl += "q=" + position + "&appid=" + apiKey + "&units=metric";

    $.getJSON(responseUrl, function(data){
    console.log(data);

    $("#city-search").text(searchLocation);
    $("#temp").text(data.main.temp);
    $("#wind").text(data.wind.speed);
    $("#humid").text(data.main.humidity);

});
}

$(document).ready(getWeather());