'use strict';

const fs = require('fs');

const bitmap = fs.readFileSync('../asset/bitmap.bmp');
const bmp = {};

console.log(bitmap.toString('ascii', 0, 2));
console.log('size of bitmap ' + bitmap.readUInt32LE(2));
console.log('px start ' + bitmap.readUInt32LE(10));
console.log('bit of info per px = ' + bitmap.readUInt16LE(28));
console.log('number of colors = ' + bitmap.readUInt32LE(46));
