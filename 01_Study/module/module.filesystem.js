var fs = require('fs');

// readFileSync(): 동기적으로 파일을 읽는 메서드
var text = fs.readFileSync('textfile.txt', 'utf8');
console.log(text);

// readFile(): 비동기적으로 파일을 읽는 메서드
var text2 = fs.readFile('textfile.txt', 'utf8', function(error, data) {
  console.log(data);
});
// textfile.txt를 다 읽으면 마지막 파라미터인 함수를 실행
// 파일을 정상적으로 읽으면 콜백함수의 두 번째 매개변수로 읽은 데이터를 전달

var data = 'Hello World';
fs.writeFile('textFileOtherWrite.txt', data, 'utf8', function(error) {
  console.log('WRITE FIlE ASYNC COMPLETE');
});

fs.writeFileSync('TextFileOtherWrite.txt', data, 'utf8');
console.log('WRITE FILE SYNC COMPLETE');


///////////////////////////////////////////////////////

// 파일이 존재하지 않아서 읽을 수 없거나, 파일을 쓸 수 없는 위치에서 오류가 발생할 떄
// 프로그램이 곧바로 종료되는 것을 방지하기 위한 예외처리 방법!


// 동기처리를 하는 메서드 예외처리
// file read
try {
  var data = fs.readFileSync('textfile.txt', 'utf8');
  console.log(data);
} catch (e) {
  console.log(e);
}

// file write
try {
  fs.writeFileSync('textfile.txt', data, 'utf8');
  console.log('FILE WRITE COMPLETE');
} catch (e) {
  console.log(e);
}


// 비동기처리를 하는 메서드 예외처리
// file read
fs.readFile('textfile.txt', 'utf8', function(error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

// file write
fs.writeFile('textfile.txt', data, 'utf8', function(error) {
  if (error) {
    console.log(error);
  } else {
    console.log('FILE WRITE COMPLETE');
  }
});
