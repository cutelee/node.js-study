/*
 module: 기능을 쉽게 사용하고자 메서드와 속성을 미리 정의해 모아둔 것
 node.js는 모듈을 사용하여 기능을 확장한다.
*/

// exports object: 모듈을 생성할 때 사용하는 객체

// 절대값을 구하는 메서드
exports.abs = function(number) {
  if(0 < number) {
    return number;
  } else {
    return -number;
  }
};

// 원의 넓이를 구하는 메서드
exports.circleArea = function(radius) {
  return radius * radius * Math.PI;
};
