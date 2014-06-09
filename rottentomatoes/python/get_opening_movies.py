#*******************************************************************************************
# This code snippet returns Opening Movies using Rotten Tomatoes Opening Movies API
# You will need to get an API key from Crunchbase http://developer.rottentomatoes.com
# Once you have the API key, enter that in the api_config.py file
#*******************************************************************************************

#Import libraries.
import urllib2, simplejson
import api_config

try:
    url ='http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?limit=16&country=us&apikey=%s' % (api_config.API_KEY)

    # Making the request
    req = urllib2.urlopen(url).read()
    raw = simplejson.loads(req)

    #Grabbing the movies returned into an array
    movies = raw['movies']

    print "*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*="
    print "Showing This Week's Opening Movies"
    print "*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*="

    #iterating through the movies returned and printing the Movie Title
    for i, movie in enumerate(movies):
        print str(i+1) + ", " + movie['title']

#Handling HTTP errors gracefully
except urllib2.URLError, e:
    if e.code == 403:
        print str(e) + ' -- Did you enter your API key in the api_config.py file?'