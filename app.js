function getWeather() {
    //query url
    var key = "6323c384c35aed8b3ec1d85758067130"
    let queryURL =
      "api.openweathermap.org/data/2.5/weather?q=London&appid={6323c384c35aed8b3ec1d85758067130}";
    //ajax call
    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (response) {
      console.log(queryURL);
      console.log(response);
      //save the search results and create search buttons
    });
  }