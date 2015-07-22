var http = require('http');
var server = http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Node.js\n');
});

var port = Number(process.env.PORT || 3000);
server.listen(port);