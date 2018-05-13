// EventEmiiter 객체를 생성
var EventEmitter = require('events')
exports.timer = new EventEmitter()

// 이벤트 강제 발생
setInterval(function() {
  exports.timer.emit('tick');
}, 1000);
