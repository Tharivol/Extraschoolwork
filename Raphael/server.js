var express = require('express')

var app = express()

app.use(express.static('./public')) // creates many individual get routes for each individual file in ./public


app.get("/", function(req,res){
	res.sendFile('./public/html/something.html', {root: __dirname});
})

app.get('/about', function(req,res)	{
	res.send("It's fun and games!")
})

app.get("/undercanopy", function(req,res)	{
	res.sendFile('./public/js/main.js', {root: __dirname});
})

app.listen(8080)




















