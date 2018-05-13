var array = [];
for (var i = 0; i < 10; i++) {
  array.push(i * i);
}

// array = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

array.forEach(function (item, index) {
  console.log(item);
});
