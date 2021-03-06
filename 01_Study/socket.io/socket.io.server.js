// 모듈 추출
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 웹 서버 생성
var server = http.createServer(function (request, response) {
  // HTMLPage.html 파일 read
  fs.readFile('HTMLPage.html', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.end(data);
  });
}).listen(52273, function() {
  console.log('Server running at http://127.0.0.1:52273');
});

// 소켓 서버 생성 및 실행
var io = socketio.listen(server);
io.sockets.on('connection', function (socket) {
  // rint event
  socket.on('rint', function (data) {
    // 클라이언트가 전송한 데이터를 출력
    console.log('Client Send Data:', data);

    // 클라이언트에 smart 이벤트 발생
    socket.emit('smart', data);
  });
});
