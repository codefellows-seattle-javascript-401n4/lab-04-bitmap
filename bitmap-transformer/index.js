
'use strict';

const transform = require('./lib/transform.js');
const readWrite = require('./lib/reading-writing.js');
const filepath = process.argv[2];

let outputPath = './assets/newimg.bmp';

let typeOfTransform;
let targetColor = 'red';

switch (process.argv[3]) {
case 'greyscale':
  typeOfTransform = transform.greyScale;
  break;
case 'invert':
  typeOfTransform = transform.invert;
  break;
case 'scale':
  typeOfTransform = transform.scale;
  targetColor = process.argv[4].toLowerCase();
  break;
default:
  typeOfTransform = null;
  break;
}

if(typeOfTransform) {
  readWrite.read(filepath, outputPath, typeOfTransform, targetColor, readWrite.write);
} else {
  console.log('Incorrect Input');

};

