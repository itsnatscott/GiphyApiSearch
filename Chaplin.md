Make an express server that takes an input, and upon submission returns a selection of gifs 
that are tagged with that input

root page should have an input field and a button.

Upon pressing the button the app queries the giphy api 
(http://api.giphy.com/v1/gifs/search?&api_key=dc6zaTOxFJmzC)for gifs containing the inputted (input?) key words

retreive a json file for matching gifs

pull the url locations of each matching gif in downsized large format

render the gifs in a results page

if time permits implement a button that saves the "liked" results to an html file.