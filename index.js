'use strict';

const fileReader = require('./lib/print-files.js');
const readline = require('readline');
const fileList = process.argv.slice(2);
const bitMap = require('./lib/bitMap.js')

//Using a promise
// fileReader.getFiles('/../data/file1.txt', '/../data/file2.txt', '/../data/file3.txt');
// //using a callback
// fileReader.getFilesCB(['/../data/file1.txt', '/../data/file2.txt', '/../data/file3.txt']);

fileReader.readFilesInOrder(fileList, function(err, data) {
  if (err) throw err;
  data.forEach((content => {
    let newbitMap = new bitMap(content);
    newbitMap.setAll('green', 25);
    newbitMap.changeAll('blue', 'divide', 2)
    newbitMap.write()
  }));
});
