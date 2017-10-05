
'use strict';

const colorScale = require('./lib/transform.js');
const bitmapFileRead = require('./lib/read-write.js');
const bitmap = require('./lib/bitmap.js');
const filepath = process.argv[2];
let outputPath = './asset/output.bmp';
let transformSelect;


if (process.argv[3] === 'scale') {

  transformSelect = colorScale.scale;

} else if (process.argv[3] === 'invert') {
  
  transformSelect = colorScale.invert;

}else if (process.argv[3] === 'random') {
  
  transformSelect = colorScale.random;

} else {

  transformSelect = null;
  
}

  

if(transformSelect) {
  bitmapFileRead.read(filepath, outputPath, transformSelect, bitmapFileRead.write);
} else {
  console.log('Input incorrect please try again.');
}