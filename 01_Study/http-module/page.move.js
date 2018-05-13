// 페이지 강제 이동

var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(302, { 'Location': 'http://www.hanbit.co.kr' });
  response.end();
}).listen(52273, function() {
  console.log('Server running at 127.0.0.1:52273');
});
