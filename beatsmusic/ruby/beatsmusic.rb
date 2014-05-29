#*******************************************************************************************
# This code snippet returns Opening Movies using Beats Music API
# You will need to get an API key from Crunchbase http://developer.beatsmusic.com
# Once you have the API key, enter that in the api_config.eb file
#*******************************************************************************************

require 'json'
require 'open-uri'
require_relative 'api_config'

url = "https://partner.api.beatsmusic.com/v1/api/albums/al19843113?client_id=#{BEATS_MUSIC_API_KEY}"
puts url

begin
   data = JSON.parse(open(url).read)
rescue OpenURI::HTTPError => e #Handling HTTP errors gracefully
  error_code = e.io.status[0]
  print "#{e.message}"
  if error_code == "403" #If invalid API Key - 403
    puts " -- Did you enter your API key in the api_config.rb file?"   
 end
  exit
end
  
#Grabbing the Tracks returned into an array
tracks = data["data"]["refs"]["tracks"]

#iterating through the tracks returned and printing the Track Title aka Display Name
puts "*=" * 20
puts "Showing the tracks from the ALbum"
puts "*=" * 20
tracks.each_with_index do |track,index|
  puts "#{index+1}. #{track["display"].to_s}"
end