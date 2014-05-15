$(document).ready(function(){	
	api_key = 'YOUR_API_KEY_HERE'; //http://developer.rottentomatoes.com
	getData();
});

function getData(){
	  $.ajax({
		url: 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?apikey='+ api_key + '&limit=',
	    dataType: "jsonp",
		success: displayResults
	  });
}

function displayResults(data) {
    var movies = data.movies;
    $.each(movies, function(index, movie) {
		$("#results").append('<div id="box-'+index+'"class="box tl tr bl br span-5"><div class="span-5"><h3><a target="_blank" href="'+ movie.links.alternate+'">' + movie.title + '</a></h3></div><div class="thumbnail span-5"><img src="' + movie.posters.thumbnail + '" /></div>');
    });
}