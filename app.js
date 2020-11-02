// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://community-open-weather-map.p.rapidapi.com/weather?q=London%252Cuk",
//     "method": "GET",
//     "headers": {
//       "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
//       "x-rapidapi-key": "[6323c384c35aed8b3ec1d85758067130]"
//     }
//   }
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });

$(document).ready(function(){
        //query url
        var key = "6323c384c35aed8b3ec1d85758067130"
        let queryURL =
          "https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=6323c384c35aed8b3ec1d85758067130";
        //ajax call
        $.ajax({
          url: queryURL,
          method: "GET",
        }).then(function (response) {
          console.log(queryURL);
          console.log(response);
          var widget = writeInfo(response)
          $('#weather').html(widget)
        });
});

function writeInfo(response){
    //var actualName = $("<h1>").text(main.temp);
    return "<h2>Weather: " + response.weather[0].main + "</h2>" +
        "<h2>Description: " + response.weather[0].description + "</h2>" +
        "<h2>Temp: " + response.main.temp + "</h2>"
    //$('#main').append(actualName)
}
writeInfo();

// function getWeather() {
//     //query url
//     var key = "6323c384c35aed8b3ec1d85758067130"
//     let queryURL =
//       "api.openweathermap.org/data/2.5/weather?q=London&appid={6323c384c35aed8b3ec1d85758067130}";
//     //ajax call
//     $.ajax({
//       url: queryURL,
//       method: "GET",
//     }).then(function (response) {
//       console.log(queryURL);
//       console.log(response);
//       //save the search results and create search buttons
//     });
//   }