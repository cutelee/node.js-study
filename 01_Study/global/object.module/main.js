// require() : 생성한 모듈을 다른 자바스크립트 파일에서 추출할 때 사용하는 함수

// 모듈을 추출
var module = require('./module.js');

/*
  확장자 없이 모듈 이름만 쓸 경우, 파일을 먼저 찾고
  파일이 존재하지 않으면 폴더를 찾아 폴더 안의 index.js를 추출
*/

// 모듈을 사용
console.log('abs(-273) = %d', module.abs(-273));
console.log('circleArea(3) = %d', module.circleArea(3));
