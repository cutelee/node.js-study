// util module: node.js의 보조적인 기능을 모아둔 모듈

// 모듈 추출
var util = require('util');

// 모듈 사용
var data = util.format('%d + %d = %d', 52, 273, 52 + 273);
console.log(data);

// format(): 매개변수로 입력한 문자열을 조합해서 리턴
