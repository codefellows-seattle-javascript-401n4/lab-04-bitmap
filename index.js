'use strict';



const file = require('./lib/file.js');
const transform = require('./lib/transformer.js');

transformBitmap('../test/asset/bitmap.bmp', './test/asset/bitmapTest.bmp', transform.white);
transformBitmap('../test/asset/finger-print.bmp', './_test_/asset/finger-print.bmp', transform.white);



let transformBitmap = function (inputFile, outputFile, transformType) {
  let dataBuffer = file.read(inputFile);
  let newBuffer = transformType(dataBuffer);
  file.write(newBuffer, outputFile);
};
