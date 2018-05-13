// 모듈 추출
var http = require('http');

// 웹서버 생성
var server = http.createServer();

// 웹서버 실행
server.listen(52273);

/*
  listen(port[, callback]): 서버를 실행
  close([callback]): 서버를 종료

  port: 컴퓨터와 컴퓨터를 연결하는 정보의 출입구 역할(0~65535)
*/

var server = require('http').createServer();

server.listen(52273, function() {
  console.log('Server Running at http://127.0.0.1:52273');
});

// 10초 후 함수 실행
var test = function() {
  // 서버 종료
  server.close();
};
setTimeout(test, 10000);



var http = require('http');
var server = http.createServer();

// server.on([event name], function);

server.on('request', function (code) {
  console.log('Request On');
});

server.on('connection', function (code) {
  console.log('Connection On');
});

servr.on('close', function (code) {
  console.log('Close On');
});

server.listen(52273);
