var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(404);
  response.end();
}).listen(52273, function() {
  console.log('Server running at 127.0.0.1:52273');
});
