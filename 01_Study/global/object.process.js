// process.argv
process.argv.forEach(function (item, index) {
  // print
  console.log(index + ' : ' + typeof(item) + ' : ', item);

  // if argv has --exit
  if (item == '--exit') {
    // get next argv
    var exitTime = Number(process.argv[index + 1]);

    // exit program
    setTimeout(function () {
      process.exit();
    }, exitTime);
  }
})
