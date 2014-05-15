$(document).ready(function(){	
	api_key = 'YOUR_API_KEY_HERE'; //http://www.theguardian.com/open-platform
	getData();
});

function getData(){
	  $.ajax({
		url: 'http://content.guardianapis.com/search?q=crossrail&format=json&api-key=' + api_key,
	    dataType: "jsonp",
		success: displayResults
	  });
}

function displayResults(data) {
    var results = data.response.results;
    $.each(results, function(index, result) {
		$("#results").append('<div id="box-'+index+'"class="box tl tr bl br span-5"><div class="span-5"><h3><a target="_blank" href="'+ result.webUrl+'">' + result.webTitle + '</a></h3></div><div class="thumbnail span-5"></div>');
    });
}