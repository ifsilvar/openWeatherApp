$(document).ready(function(){
        $('#submit').click(function(){
            var location = $('#location').val().trim();
            if(location != ''){
                //query url
                var key = "6323c384c35aed8b3ec1d85758067130"
                let queryURL =
                "https://api.openweathermap.org/data/2.5/weather?q="+ location +"&units=imperial&appid=6323c384c35aed8b3ec1d85758067130";
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
            }
        })
        
});

function writeInfo(response){
    return "<img id='icon' src='http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png'>" +
        "<p id='cityWeather'>" + response.name + ", " + response.sys.country + "</p>" +
        "<p id='currentTemp'><strong>" + response.main.temp + " F" + "</strong></p>" + 
        "<p><strong>H:" + response.main.temp_max + "° " + "L:" + response.main.temp_min + "°" + "</strong></p>" + 
        "<p><strong>" + response.weather[0].main + "</strong></p>"+
        "<p><strong>Wind: " + response.wind.speed + " MPH" +"</strong></p>" +
        "<p><strong>Description: " + response.weather[0].description + "</strong></p>"
        
}
