# Python Code snippet for Beats Music API

This code snippet is a quick example of how to use the Beats Music API to return all tracks from an Album, given it's album ID, using Beats Music's Album Lookup API.

## Usage

You will need to get an API key from [Beats Music](http://developer.beatsmusic.com). Once you have the API key, enter that in the api_config.py file

### Getting Started 

Step-by-step on how to use this snippet. 

1) Grab latest source
	<pre>git clone git://github.com/ajotwani/catalyst.git</pre>

2) Navigate to the folder and configure the api_config.rb with your API Key. Get your API key from [Beats Music](http://developer.beatsmusic.com)

3) Install all dependencies. Open Terminal and type the following (If you run into permission issues, try with sudo) -
	
<pre>easy_install simplejson</pre> 

3) Fire up the terminal and navigate to the directory you cloned the repo to.

<pre>python get_tracks.py</pre>