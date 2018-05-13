// 이벤트 11개 연결
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });
process.on('exit', function() { });

// 위 코드 실행하면 정상적으로 작동은 되지만, 경고 발생
// warning: possible EventEmitter memory leak detected. ..
// 실제 프로젝트를 진행할 때 많은 이벤트 리스너를 연결하는 경우가 있을 수 있기 떄문에
// 경고를 제거하려면 setMaxListeners(limit) 함수를 사용한다.
// setMaxListeners(limit): 이벤트 리스너 연결 개수를 조절하는 메서드

// 이벤트 연결 개수 제한을 15개로 설정
process.setMaxListeners(15);
