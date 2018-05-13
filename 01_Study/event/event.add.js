// EventEmitter 객체 생성
var EventEmitter = require('events');
var custom = new EventEmitter();

// 이벤트 연결
custom.on('tick', function (code) {
  console.log('execute event');
});

// 이벤트 강제 발생
custom.emit('tick');

/*
  일반적으로 이벤트를 생성하는 부분과 연결하는 부분을 모듈로 분리해서 사용함.
  따라서 이벤트를 생성하고 연결하는 위와 같은 과정을 거침.
*/
