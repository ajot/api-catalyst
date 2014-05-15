$(document).ready(function(){	
	api_key = 'YOUR_API_KEY_HERE'; //http://developer.worldweatheronline.com
	getData();
});

function getData(){
  $.ajax({
	url: 'http://api.worldweatheronline.com/free/v1/weather.ashx?q=London&format=json&num_of_days=1&key=' + api_key,
    dataType: "jsonp",
    success: displayResults
  });
}

function displayResults(data) {
	alert("Temperature: " + data.data.current_condition[0].temp_F);
}
