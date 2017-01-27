var express = require('express'),
	bodyParser = require('body-parser'),
	morgan = require('morgan');

var app =express();

app.use(morgan ('dev'));

var PORT = process.env.PORT || 8080

app.listen(port, function()	{
	if (err)	{
		console.log("server failed", err)
	} else	{
	console.log ("server is up and listening to port", PORT)
	}
})