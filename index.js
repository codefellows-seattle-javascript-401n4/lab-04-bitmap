'use strict';

const fileReader = require('./lib/print-files.js');
const readline = require('readline');
const fileList = process.argv.slice(2);
const bitMap = require('./lib/bitMap.js')
const tranform = require('./lib/transformation.js')

fileReader.readFilesInOrder(fileList, function(err, data) {
  if (err) throw err;
  data.forEach((content, index) => {
    tranform.average(content, 'file_' + index)
    tranform.luminosity(content, 'file_' + index)
    tranform.lightness(content, 'file_' + index)
    tranform.toBlue(content, 'file_' + index)
  })
});
