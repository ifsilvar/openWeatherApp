$(document).ready(function(){
        //query url
        var key = "6323c384c35aed8b3ec1d85758067130"
        let queryURL =
          "https://api.openweathermap.org/data/2.5/weather?q=irvine&units=imperial&appid=6323c384c35aed8b3ec1d85758067130";
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
    return "<h1>Location: " + response.name + ", " + response.sys.country + "</h1>" + 
        "<p><strong>Weather: " + response.weather[0].main + "</strong></p>" + 
        "<p><strong>Wind: " + response.wind.speed + "</strong></p>" +
        "<p><strong>Description: " + response.weather[0].description + "</strong></p>" +
        "<p><strong>Temp: " + response.main.temp + "</strong></p>"
    //$('#main').append(actualName)
}
writeInfo();