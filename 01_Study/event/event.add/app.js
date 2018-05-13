// 모듈 추출
var rint = require('./rint');

// 이벤트 연결
rint.timer.on('tick', function (code) {
  console.log('excute event');
});
