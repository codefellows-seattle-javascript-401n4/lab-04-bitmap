'use strict';

const fileReader = require('./lib/print-files.js');
const readline = require('readline');
const fileList = process.argv.slice(2);

//Using a promise
fileReader.getFiles('/../data/file1.txt', '/../data/file2.txt', '/../data/file3.txt');
//using a callback
fileReader.getFilesCB(['/../data/file1.txt', '/../data/file2.txt', '/../data/file3.txt']);

fileReader.readFilesInOrder(fileList, function(err, data) {
  console.log('doing it');
  if (err) throw err;
  data.forEach((content => {
    console.log(content);
  }));
});
