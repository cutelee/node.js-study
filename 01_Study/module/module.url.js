// 모듈 추출
var url = require('url');

// parse(): 매개변수로 URL 문자열을 입력하면 URL을 분해해서 객체로 만든다.

// 모듈 사용
var parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160');
console.log(parsedObject);

/*
  실행 결과
  Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.hanbit.co.kr',
  port: null,
  hostname: 'www.hanbit.co.kr',
  hash: null,
  search: '?p_code=B4250257160',
  query: 'p_code=B4250257160',
  pathname: '/store/books/look.php',
  path: '/store/books/look.php?p_code=B4250257160',
  href: 'http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160' }
*/

parsedObject = url.parse('http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160', true);
console.log(parsedObject);

/*
  실행 결과 : query 속성을 객체({})로 출력한다.
  Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.hanbit.co.kr',
  port: null,
  hostname: 'www.hanbit.co.kr',
  hash: null,
  search: '?p_code=B4250257160',
  query: { p_code=B4250257160 },
  pathname: '/store/books/look.php',
  path: '/store/books/look.php?p_code=B4250257160',
  href: 'http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160' }
*/
