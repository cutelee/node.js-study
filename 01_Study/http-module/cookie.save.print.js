var http = require('http');
http.createServer(function (request, response) {
  var date = new Date();
  date.setDate(date.getDate() + 7);

  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Set-Cookie': [
      'breakfast = toase;Expires = ' + date.toUTCString(),
      'dinner = chicken'
    ]
  });

  response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(52273, function () {
  console.log('Server running at 127.0.0.1:52273');
});


// 결과: 처음 요청하면 undefined, 두 번째 요청하면 쿠키 출력(클라이언트가 쿠키를 가지기 때문에)
