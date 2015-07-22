var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	var port = process.env.PORT || 3000;
server.listen(port);
// io.configure(function () { 
//   io.set("transports", ["xhr-polling"]); 
//   io.set("polling duration", 10); 
// });

app.get('/', function(req, res){
	res.sendFile(__dirname + '/UI.html');
});

//server nhận data từ client
io.sockets.on('connection', function(socket){
	socket.on('send mess', function(data)
	{
		io.sockets.emit('new mess', data);
		
	});
});