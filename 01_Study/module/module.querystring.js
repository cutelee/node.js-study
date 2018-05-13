// Query String module: URL 객체의 쿼리와 관련된 모듈
// Query String module로 쿼리 부분을 분해해주는 모듈

// 모듈 추출
var url = require('url');
var querystring = require('querystring');

// 모듈 사용
var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(querystring.parse(parsedObject.query));

/*
  실행결과
  { p_code: 'B4250257160' }
*/
