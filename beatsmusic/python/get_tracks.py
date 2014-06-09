#*******************************************************************************************
# This code snippet returns Tracks from an album, given it's Album ID using Beats Music API
# You will need to get an API key from Beats Music http://developer.beatsmusic.com
# Once you have the API key, enter that in the api_config.rb file
#*******************************************************************************************

#Import libraries.
import urllib2, simplejson
import api_config

try:
    url ='https://partner.api.beatsmusic.com/v1/api/albums/al19843113?client_id=%s' % (api_config.API_KEY)

    # Making the request
    req = urllib2.urlopen(url).read()
    raw = simplejson.loads(req)

    #Grabbing the Tracks returned into an array
    tracks = raw["data"]["refs"]["tracks"]

    print "*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*="
    print "Showing the tracks from the ALbum"
    print "*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*="

    #iterating through the tracks returned and printing the Track Title aka Display Name
    for i, track in enumerate(tracks):
        print str(i+1) + ", " + track['display']

#Handling HTTP errors gracefully
except urllib2.URLError, e:
    if e.code == 403:
        print str(e) + ' -- Did you enter your API key in the api_config.py file?'