var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	nicknames = [];
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
	//nhận data new user
	socket.on('new user', function(data, callback){
		if(nicknames.indexOf(data) != -1)
		{
			callback(false);
		}else{
			callback(true);
			socket.nickname = data;
			nicknames.push(socket.nickname);
			io.sockets.emit('usernames', nicknames);
		}
	});
	//nhận thông tin từ client
	socket.on('send mess', function(data)
	{
		//send data lại cho client
		io.sockets.emit('new mess', data);
		
	});
});