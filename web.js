var express = require('express');
var fs = require('fs');

var app = express.createServer();

app.configure(function(){
	app.use(express.static(__dirname + '/public'));
});



app.get('/', function(request, response) {
	res.sendfile(__dirname + '/index.html');;
});

var port = process.env.PORT || 5000;

app.listen(port, function() {
  	console.log("Listening on " + port);
});


