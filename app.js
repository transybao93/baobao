var http = require('http');
var express = require('express');
var server = http.createServer(function (req, res) 
{
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Node.js\n');
});

var port = Number(process.env.PORT || 3000);
server.listen(port);

//trỏ đến file html
express.get('/', function(req, res){
	res.sendFile(__dirname + '/UI.html');
});