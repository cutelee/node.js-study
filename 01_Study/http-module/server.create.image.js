var fs = require('fs');
var http = require('http');

// image
http.createServer(function (request, response) {
  fs.readFile('filename.jpg', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'image/jpeg'});
    response.end(data);
  });
}).listen(52273, function () {
  console.log('Server is Running at http://127.0.0.1:52273');
});

// audio
http.createServer(function (request, response) {
  fs.readFile('filename.mp3', function (error, data) {
    response.writeHead(200, { 'Content-Type': 'audio/mp3'} );
    resonse.end(data);
  });
}).listen(52273, function () {
  console.log('Serve is Running at http://127.0.0.1:52273');
});

/*
  text/plain: 기본적인 텍스트
  text/html: HTML 문서
  text/css: CSS 문서
  text/xml: XML 문서
  image/jpeg: JPG/JPEG 그림 파일
  image/png: PNG 그림파일
  video/mpeg: MPEG 비디오 파일
  audio/mp3: MP3 음악파일
*/
