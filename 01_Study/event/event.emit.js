// emit(eventName[, arg1][, arg2][, ...]): 이벤트 실행(깅제 발생)

// exit 이벤트를 연결
process.on('exit', function (code) {
  console.log('Good Bye!');
});

// 이벤트 강제 발생
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

// 프로그램 실행 중
cosole.log('program execute');

/*
  결과
  Good Bye!
  Good Bye!
  Good Bye!
  Good Bye!
  program execute
  Good Bye!

  => exit 이벤트를 강제로 호출해도 프로그램이 종료되지 않으며,
  emit()으로 이벤트를 강제 호출할 경우 이벤트 리스너만 실행

  프로그램을 종료하려면 process.exit() 사용
*/
