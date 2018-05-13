// string type global variables in node.js
console.log('filename: ', __filename); // current file path
console.log('dirname: ', __dirname); // current dir path


// console object
console.log('output: %d', 273); // 273
console.log('%d + %d = %d', 273, 52, 273 + 52, 52273); // 273 + 52 = 325 52273
console.log('%d + %d = %d & %d', 273, 52, 273 + 52); // 273 + 52 = 325 & %d

console.log('number: %d + %d = %d', 273, 52, 273 + 52);
console.log('string: %s', 'Hello World', 'additional string');
console.log('JSON: %j', { name: 'RintIanTta' });
