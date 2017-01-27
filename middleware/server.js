// Install (npm init....npm install morgan)

var express = require('express');
	var logger = require('morgan');

// invoke the express() function returned by the require to create our app
var app = express();

app.use(logger('dev'))


app.get('/', function(req,res)	{
	res.send('literal string')
})

// define the port that we will listen to

var PORT = process.env.PORT || 8080;

app.listen(PORT, function(err)	{
	if (err)	{
		console.log("server error:", err)
	} else	{
		console.log("server up on port", PORT)
	}
})
