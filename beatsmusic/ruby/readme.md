# Ruby Code snippet for Rotten Tomatoes API

This code snippet is a quick example of how to use the Rotten Tomatoes API to return all tracks from an Album, given it's album ID, using Beats Music's Album Lookup API. You will need to get an API key from [Beats Music](http://developer.beatsmusic.com). Once you have the API key, enter that in the api_config.eb file

## Usage

You will need to get an API key from [Beats Music](http://developer.beatsmusic.com). Once you have the API key, enter that in the api_config.eb file


### Getting Started 

Step-by-step on how to use this snippet. 

1) Grab latest source
	<pre>git clone git://github.com/ajotwani/catalyst.git</pre>
2) Navigate to the folder and configure the api_config.rb with your API Key. Get your API key from [Beats Music](http://developer.beatsmusic.com)

3) Fire up the terminal and navigate to the directory you cloned the repo to.

<pre>
bundle install
</pre>

<pre>
ruby beatsmusic.rb
</pre>