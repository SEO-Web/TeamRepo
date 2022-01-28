var $breweryDisplay = document.querySelector("#brewery-display");

function getWeatherNY() {
    //debugging

    var responseUrl = "http://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=5900a658e9006d2a5eb37e656c2e92d5";

    $.getJSON(responseUrl, function (data) {
        //debugging
        console.log(data);

        var fareheight = (data.main.temp * 9 / 5) + 32;
        var knot = data.wind.speed / 1.852;

        $("#temp-ny").text(Math.round(data.main.temp) + ' °Celsius / ' + Math.round(fareheight) + ' °Farenheight');
        $("#wind-ny").text((data.wind.speed * 3.6).toFixed(1) + ' kmh / ' + (data.wind.speed / 0.44704).toFixed(1) + 'mph / ' + knot.toFixed(1) + ' knots');
        $("#humid-ny").text(data.main.humidity + '%');

    });

    
}

function getWeatherSD() {
    //debugging

    var responseUrl = "http://api.openweathermap.org/data/2.5/weather?q=San Diego&units=metric&appid=5900a658e9006d2a5eb37e656c2e92d5";

    $.getJSON(responseUrl, function (data) {
        //debugging
        //console.log(data);

        var fareheight = (data.main.temp * 9 / 5) + 32;
        var knot = data.wind.speed / 1.852;

        $("#temp-sd").text(Math.round(data.main.temp) + ' °Celsius / ' + Math.round(fareheight) + ' °Farenheight');
        $("#wind-sd").text((data.wind.speed * 3.6).toFixed(1) + ' kmh / ' + (data.wind.speed / 0.44704).toFixed(1) + 'mph / ' + knot.toFixed(1) + ' knots');
        $("#humid-sd").text(data.main.humidity + '%');

    });

    
}

function getWeatherLV() {
    //debugging

    var responseUrl = "http://api.openweathermap.org/data/2.5/weather?q=Las Vegas&units=metric&appid=5900a658e9006d2a5eb37e656c2e92d5";

    $.getJSON(responseUrl, function (data) {
        //debugging
        //console.log(data);

        var fareheight = (data.main.temp * 9 / 5) + 32;
        var knot = data.wind.speed / 1.852;

        $("#temp-lv").text(Math.round(data.main.temp) + ' °Celsius / ' + Math.round(fareheight) + ' °Farenheight');
        $("#wind-lv").text((data.wind.speed * 3.6).toFixed(1) + ' kmh / ' + (data.wind.speed / 0.44704).toFixed(1) + 'mph / ' + knot.toFixed(1) + ' knots');
        $("#humid-lv").text(data.main.humidity + '%');

    });

}

$(document).ready(getWeatherSD());
$(document).ready(getWeatherNY());
$(document).ready(getWeatherLV());