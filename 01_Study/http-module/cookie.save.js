// cookie: 키와 값이 든 작은 데이터 조각,
// 이름, 값, 파기 날짜, 경로 정보가 들어있음
// 서버와 클라이언트에서 모두 저장/사용 가능하고, 일정기간 데이터를 저장할 수 있어
// 로그인 상태를 유지해야하는 경우에 사용

var http = require('http');
http.createServer(function (request, resonse) {
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Set-Cookie': ['breakfast = toast', 'dinner = chicken']
  });
}).listen(52273, function () {
  console.log('Server Running at 127.0.0.1:52273');
});
