Make an express server that takes an input, and upon submission 
returns a selection of gifs that are tagged with that input

root page has an input field and a button.

Upon pressing the button the app queries the giphy api 
(http://api.giphy.com/v1/gifs/search?SEARCH+TERMS&api_key=dc6zaTOxFJmzC)
for gifs containing the inputted (input?) key words

retreive a json file for matching gifs

sort through json file for urls of gifs (downsized large format) 

push the url locations of each gif into an array

render the gifs in a results page using ejs and express

add a link to return to search page