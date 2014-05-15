#*******************************************************************************************
# Returns Details about an Entity using Crunchbase's Get Info API
#You will need to get an API key from Crunchbase http://developer.crunchbase.com
# Once you have the API key, enter that in the api_config.eb file
#*******************************************************************************************

require 'json'
require 'open-uri'
require_relative 'api_config'

puts "Enter a company name Eg. Facebook"
name = gets.chomp
# name = 'facebook'
url = "http://api.crunchbase.com/v/1/company/#{name}.js?api_key=#{CRUNCHBASE_API_KEY}"

data = JSON.parse(open(url).read)

puts "*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*="
puts "Name: #{data["name"]}"
puts "Description: #{data["description"]}"
puts "Number of Employees: #{data["number_of_employees"]}"
puts "Found on: #{data["founded_month"]}/#{data["founded_day"]}/#{data["founded_year"]}"

puts "Twitter: @#{data["twitter_username"].downcase}"
puts "*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*=*="
puts " "

relationships = data["relationships"]

relationships.each do |relation|
  puts "#{relation["person"]["first_name"]} #{relation["person"]["last_name"]} - #{relation["title"]}"
end