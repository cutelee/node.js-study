// crypto module: 해시 생성, 암호화를 수행하는 모듈

// 모듈 추출
var crypto = require('crypto');

// 해시 생성
var shasum = crypto.createHash('sha256');
shasum.update('crypto_hash');
var output = shasum.digest('hex');

// print
console.log('crypto_hash: ', output);

// 눈사태 효과(avalanche effect): 원본 문자열이 조금이라도 다르면 해시 형태가 굉장히 많이 달라지는 것


var key = '아무도 알지 못하는 나만의 비밀 키';
var input = 'PASSWORD';

var cipher = crypto.createCipher('aes192', key);
cipher.update(input, 'utf8', 'base64');
var cipheredOutput = cipher.final('base64');

var decipher = crypto.createDecipher('aes192', key);
decipher.update(cipheredOutput, 'base64', 'utf8');
var decipheredOutput = decipher.final('utf8');

console.log('원래 문자열: ' + input);
console.log('암호화: ' + cipheredOutput);
console.log('암호화 해제: ' + decipheredOutput);
