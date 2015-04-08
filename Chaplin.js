var express = require("express");
var app = express();
var request = require('request');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
	extended: false
}));
app.set("view_engine", "ejs");
var port = 3000;

// empty array for storing retrieved gifs
var gifs = []


//redirects root to  search page
app.get("/", function(req, res) {
	gifs = []
	res.redirect("/chapdex");
});
//renders search page
app.get("/chapdex", function(req, res) {
	gifs = []
	res.render("chapdex.ejs");
});

//gets search info from url, queries giphy api, and redirects to results page
app.post("/results", function(req, res) {
	var words = req.body.terms 
	request("http://api.giphy.com/v1/gifs/search?q=" + req.body.terms + "&api_key=dc6zaTOxFJmzC", function(err, response, body) {
		var list = JSON.parse(body)
		for (i=0; i<list.data.length; i++){
			gifs.push(list.data[i].images.downsized_large["url"])
			};
		res.redirect("/results")
	});
});
//sends gifs to results.ejs renders results.ejs
app.get("/results", function(req, res) {
	res.render("results.ejs",{gifs:gifs});
});


//listens to port 3000
app.listen(port, function() {
	console.log("listening on port: " + port);
});