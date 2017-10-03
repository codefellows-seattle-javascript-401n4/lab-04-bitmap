'use strict';

const fs = require('fs');

const readFile = module.exports = function(address){

  let bitmap = fs.readFileSync(address);

  console.log('Bitmap type: ' + bitmap.toString('ascii', 0, 2));
  console.log('Bitmap size: ' + bitmap.readUInt32LE(2));
  console.log('Start of bitmap pixel array: ' + bitmap.readUInt32LE(10));
  console.log('Bits per pixel: ' + bitmap.readUInt16LE(28));
  console.log('Number of colors: ' + bitmap.readUInt32LE(46));
  console.log('Color palette range: 54 - 1077');

  return bitmap;

};
