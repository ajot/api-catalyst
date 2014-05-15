$(document).ready(function(){	
	api_key = 'YOUR_API_KEY_HERE'; //http://developer.usatoday.com
	getData();
});

function getData(){
	  $.ajax({
		url: 'http://api.usatoday.com/open/articles/topnews/home?count=10&days=0&page=0&encoding=json&api_key='+ api_key,
	    dataType: "json",
		success: displayResults
	  });
}

function displayResults(data) {
    var stories = data.stories;

   $.each(stories, function(index, story) {
    	$("#results").append('<div id="box-'+index+'"class="box tl tr bl br span-5"><div class="span-5"><h3><a target="_blank" href="'+ story.link+'">' + story.title + '</a></h3></div><div class="thumbnail span-5"></div>');
    });
}
