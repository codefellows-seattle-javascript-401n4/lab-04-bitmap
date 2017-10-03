
'use strict';

const colorScale = require('./lib/transform.js');
const bitmapFileRead = require('./lib/read-write.js');
const bitmap = require('./lib/bitmap.js');
const filepath = process.argv[2];
let outputPath = './asset/output.bmp';
let typeOfTransform;

switch (process.argv[3]) {
case 'scale':
  typeOfTransform = colorScale.scale;
  break;
case 'invert':
  typeOfTransform = colorScale.invert;
  break;
case 'random':
  typeOfTransform = colorScale.random;
  break;
default:
  typeOfTransform = null;
  break;
}

if(typeOfTransform) {
  bitmapFileRead.read(filepath, outputPath, typeOfTransform, bitmapFileRead.write);
} else {
  console.log('Incorrect Input');
}