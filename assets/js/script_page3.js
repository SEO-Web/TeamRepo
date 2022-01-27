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

    getBreweryNY();
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

    getBrewerySD
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
    getBreweryLV()
}

function getBrewerySD() {
    $breweryDisplay.textContent = "";
    var responseUrl = "https://api.openbrewerydb.org/breweries?by_city=san_diego";

    $.getJSON(responseUrl, function (data) {
        //debugging
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var $breweryData = document.createElement("li");
            $breweryData.textContent += 'Name : ' + data[i].name + ' | Postal Code:' + data[i].postal_code + ' | Address: ' + data[i].street + ' | Website: ' + data[i].website_url;
            $breweryData.classList.add("breweryResult");
            $breweryData.setAttribute("data-value", i);
            $breweryDisplay.appendChild($breweryData);
        }
    })
}

function getBreweryNY() {
    $breweryDisplay.textContent = "";
    var responseUrl = "https://api.openbrewerydb.org/breweries?by_city=new_york";
    
    $.getJSON(responseUrl, function (data) {
        //debugging
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var $breweryData = document.createElement("li");
            $breweryData.textContent += 'Name : ' + data[i].name + ' | Postal Code:' + data[i].postal_code + ' | Address: ' + data[i].street + ' | Website: ' + data[i].website_url;
            $breweryData.classList.add("breweryResult");
            $breweryData.setAttribute("data-value", i);
            $breweryDisplay.appendChild($breweryData);
        }
    })
}

function getBreweryLV() {
    $breweryDisplay.textContent = "";
    var responseUrl = "https://api.openbrewerydb.org/breweries?by_city=las_vegas";
    

    $.getJSON(responseUrl, function (data) {
        //debugging
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            var $breweryData = document.createElement("li");
            $breweryData.textContent += 'Name : ' + data[i].name + ' | Postal Code:' + data[i].postal_code + ' | Address: ' + data[i].street + ' | Website: ' + data[i].website_url;
            $breweryData.classList.add("breweryResult");
            $breweryData.setAttribute("data-value", i);
            $breweryDisplay.appendChild($breweryData);
        }
    })
}

$(document).ready(getWeatherSD());
$(document).ready(getWeatherNY());
$(document).ready(getWeatherLV());