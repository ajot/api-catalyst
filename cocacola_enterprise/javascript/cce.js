$(document).ready(function(){	
	api_key = 'YOUR_API_KEY_HERE'; //http://developer.cokecce.com	
	getData();
});

function getData(){
	  $.ajax({
		url: 'http://apidev.cokecce.com/v1/product/search?query=%2AFANTA%2A&maxRows=20&language=EN&format=json&apiKey=' + api_key,
	    dataType: "jsonp",
		success: displayResults
	  });
}

function displayResults(data) {
 var results = data.productDetails.products;	
 $.each(results, function(index, result) {
 	$("#results").append('<div id="box-'+index+'"class="box tl tr bl br span-5"><div class="span-5"><h3><a target="_blank" href="'+ result.material+'">' + result.description + '</a></h3></div><div class="thumbnail span-5"></div>');
 });
}