// removeListener(eventName, handler): 특정 이벤트의 이벤트 리스너 제거
// removeAllListeners([eventName]): 모든 이벤트 리스너 제거

// 변수 선언
var onUncaughtException = function (error) {
  console.log('Exception occur!');

  // 이벤트 제거
  process.removeListener('uncaughtException', onUncaughtException);
};

// process 객체에 uncaughtException 이벤트 연결
process.on('uncaughtException', onUncaughtException);

// 2초 간격으로 예외발생
var test = function() {
  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 2000);

/*
  위 프로그램은 예외가 처음 발생하면 메세지를 띄우지만, 실행되는 이벤트 핸들러에서
  이벤트를 제거해버리기 때문에, 두 번째 예외가 발생하면 프로그램 종료됨
*/



// once(eventName, eventHandler): 이벤트 리스너를 한 번만 연결

// process 객체에 uncaughtException 이벤트 연결
process.once('uncaughtException', function (error) {
  console.log('Exception occur!');
});

// 2초 간격으로 예외 발생
var test = funciton() {
  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 2000);
