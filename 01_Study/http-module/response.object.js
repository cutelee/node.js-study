/*
  클라이언트에 웹페이지를 제공하려면 응답메세지를 작성해야 함
  응답메세지를 작성할 때에는 request 이벤트 리스너의 response 객체 사용

  * response object method
  writeHead(statusCode[, statusMessage][, headers]): 응답 헤더 작성
  end([data][, encoding][, callback]): 응답 본문 작성
*/

require('http').createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end('<h1>Hello Web Server with Node.js</h1>');
}).listen(52273, function() {
  console.log('Sever Running at http://127.0.0.1:52273');
});
