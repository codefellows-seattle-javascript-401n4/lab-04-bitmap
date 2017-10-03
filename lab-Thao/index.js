'use strict';

const fs = require('fs');

const transformerBluer = require('./lib/transformers/bluer.js');
const transformerDarker = require('./lib/transformers/darker.js');
const transformerGreener = require('./lib/transformers/greener.js');
const transformerRedder = require('./lib/transformers/redder.js');

//./asset because asset is inside this folder lab-thao

const bitmapWriter = require('./lib/bitmapWriter.js');

let inputFilePath = process.argv[2];
let outputFilePath = process.argv[3];
let transformerName = (process.argv[4]).toLowerCase();

console.log('inputFilePath : ' + inputFilePath);
console.log(`outputFilePath : ${outputFilePath}`);
console.log(`transformerName : ${transformerName}`);

const bitmapBuffer = fs.readFileSync(inputFilePath);

let transformedBitmap = '';

switch(transformerName) {
case 'bluer':
  transformedBitmap = transformerBluer(bitmapBuffer);
  break;
case 'darker':
  transformedBitmap = transformerDarker(bitmapBuffer);
  break;
case 'greener':
  transformedBitmap = transformerGreener(bitmapBuffer);
  break;
case 'redder':
  transformedBitmap = transformerRedder(bitmapBuffer);
  break;
default:
  throw `Error: The transformer name '${transformerName}' you typed in does not exist.`;
}

bitmapWriter(outputFilePath, transformedBitmap);

// console.log('type of bitmap: ' + bitmap.toString('ascii', 0, 2));
//
// console.log('size of the file in bytes: ' + bitmap.readUInt32LE(2));
//
// console.log('the offset of the start of the pixel array: ' + bitmap.readUInt32LE(10));
//
// console.log('the number of bits per pixel' + bitmap.readUInt16LE(28));
//
// console.log('number of colors: ' + bitmap.readUInt32LE(46));
//
// //1078 is the first pixel in the pixel array which will give us the palette color number
// console.log('1078 is the first pixel in the pixel array and its color # is: ' + bitmap[1078]); //print 28, which means the color # 28 in the palette
//
// //1079 is the second pixel in the pixel array
// console.log('1079 is the second pixel in the pixel array and its color # is: ' + bitmap[1079]);//print 0, which means the color # 0 in the palette
