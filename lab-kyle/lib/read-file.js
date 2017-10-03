'use strict';

const fs = require('fs');

const readFile = module.exports = function (oldImg) {

  let bitmap = fs.readFileSync(oldImg);

  console.log('Bitmap Type: ' + bitmap.toString('ascii', 0, 2));
  console.log('File Size: ' + bitmap.readUInt32LE(2));
  console.log('Offset Start: ' + bitmap.readUInt32LE(10));
  console.log('Bits Per Pxl: ' + bitmap.readUInt32LE(28));
  console.log('Number of colors: ' + bitmap.readUInt32LE(46));
  
  return bitmap;

};
