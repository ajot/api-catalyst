# Python Code snippet for Rotten Tomatoes API

This code snippet is a quick example of how to use the Rotten Tomatoes API to return This Week's Opening Movies using Rotten Tomatoes' Opening Movies API.

## Usage

You will need to get an API key from [Rotten Tomatoes](http://developer.rottentomatoes.com). Once you have the API key, enter that in the api_config.py file.


### Getting Started 

Step-by-step on how to use this snippet. 

1) Grab latest source
<pre>
git clone git://github.com/ajotwani/
</pre>

2) Navigate to the folder and configure the api_config.py with your API Key. Get your API key from [Rotten Tomatoes](http://developer.rottentomatoes.com)

3) Install all dependencies. Open Terminal and type the following (If you run into permission issues, try with sudo) -
	
<pre>easy_install simplejson</pre> 

3) Fire up the terminal and navigate to the directory you cloned the repo to.

<pre>python get_opening_movies.py</pre>