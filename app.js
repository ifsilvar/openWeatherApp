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
                writeInfo(response)
                // $('#weather').html(widget)
                });
            }
        })
        
});

function writeInfo(response){
    // // var newCard = $("<div>").addClass("card mb-3")
    //     var newRow = $(`<div>`).addClass("row no-gutters");
    //     var newCol = $(`<div>`).addClass("col-md-4");
    //     var imgIcon = $(`<img>`).addClass("card-img").attr("src", "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png").attr("alt", "weather icon");
    //     newCol.append(imgIcon);
    //     newRow.append(newCol);
    //     // newCard.append(newRow);
        

    // var colBody = $(`<div>`).addClass("col-md-8");
    // var cardBody = $(`<div>`).addClass("card-body");
    // var cityTitle = $(`<h5>`).addClass("card-title").text(response.name + ", " + response.sys.country + "\n" + response.weather[0].main);
    // var weatherStats = $(`<p>`).addClass("card-text");
    // var foot = $(`<p>`).addClass("card-text")
    // var footText = $(`<small>`).addClass("text-muted").text("Last updated 3 mins ago")
    // foot.append(footText);
    // weatherStats.append(foot);
    // cityTitle.append(weatherStats);
    // cardBody.append(cityTitle);
    // colBody.append(cardBody);
    $("#weather").show();

    var cityTitle = $(`<h5>`).addClass("card-title text-white").text(response.name + ", " + response.sys.country).css("margin", "0px");
    var weatherTitle = $(`<p>`).addClass("card-text text-white").text(response.weather[0].main).css("margin", "0px");
    var currentTemp = $(`<h1>`).addClass("card-text text-white").text(Math.floor(response.main.temp) + "° F").css("margin", "0px");
    var weatherHL = $(`<p>`).addClass("card-text text-white").text("H:" + Math.floor(response.main.temp_max) + "° " + "L:" + Math.floor(response.main.temp_min) + "°").css("margin", "0px");
    var wind = $(`<p>`).addClass("card-text text-white").text("Wind: " + Math.floor(response.wind.speed) + " MPH").css("margin", "0px")
    var description = $(`<p>`).addClass("card-text text-white").text("Description: " + response.weather[0].description).css("margin", "0px")
    $("#cardBody").append(cityTitle, weatherTitle, currentTemp, weatherHL, wind, description);
    var weatherImg = $(`<img>`).addClass(`card-img img-fluid`).attr(`src`, `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`).attr("alt", "Responsive image").css('width', '80%');
    // $("#weather").append(newRow, colBody);
    $("#imgHere").append(weatherImg);
    // return "<img id='icon' src='http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png'>" +
    //     "<h2 id='cityWeather'>" + response.name + ", " + response.sys.country + "</h2>" +
    //     "<p><strong>" + response.weather[0].main + "</strong></p>"+
    //     "<p id='currentTemp'><strong>" + response.main.temp + " F" + "</strong></p>" + 
    //     "<p><strong>H:" + response.main.temp_max + "° " + "L:" + response.main.temp_min + "°" + "</strong></p>" + 
    //     "<p><strong>Wind: " + response.wind.speed + " MPH" +"</strong></p>" +
    //     "<p><strong>Description: " + response.weather[0].description + "</strong></p>"
        
}
