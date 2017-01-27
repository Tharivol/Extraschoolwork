var express = require('express');

app = express();

app.get('/', function (req, res)	{
	res.send("<h1>What's up world?</h1>")
})

// must change localhost 8080 to 8080/home

app.get('/home', function (req, res)	{
	res.sendFile("/home.html", {root:'./public/'})
})

app.get('/about', function (req, res)	{
	res.sendFile("/about.html", {root:'./public/'})
})

var PORT = process.env.PORT || 8080;

app.listen(PORT , function ()	{
	console.log('server is up and listening to port', PORT)
})