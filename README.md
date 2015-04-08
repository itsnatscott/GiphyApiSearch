Make an express server that takes an input, and upon submission returns a selection of gifs that are tagged with the search terms.

root page should have an input field and a button.

Upon pressing the button the app queries the giphy api 
(http://api.giphy.com/v1/gifs/search?Search+Terms&api_key=dc6zaTOxFJmzC)for gifs containing the inputted (input?) key words

sort through retrieved json file for matching gifs

push the url locations of each gif into an array (downsized large format)

render the gifs in the results page using express and ejs

added a return to search link at end of results.
array of gifs is reset upon returning to search page.