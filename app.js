var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	//io = require('socket.io').listen(server);
	var port = Number(process.env.PORT || 3000);
server.listen(port);
// io.configure(function () { 
//   io.set("transports", ["xhr-polling"]); 
//   io.set("polling duration", 10); 
// });

app.get('/', function(req, res){
	res.sendFile(__dirname + '/UI.html');
});