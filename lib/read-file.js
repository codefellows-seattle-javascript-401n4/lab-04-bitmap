'use strict';



const fs = require('fs');


const readFile = module.exports = (address) => {
  let bitmap = fs.readFileSync(address);

  console.log('bitmap type: ' + bitmap.toString('ascii', 0, 2));

  console.log('bitmap size: ' + bitmap.readUInt32LE(2));

  console.log('bitmap array: ' + bitmap.readUInt32LE(10));

  console.log('start pixels: ' + bitmap.readUInt16LE(28));

  console.log('color numbers: ' + bitmap.readUInt32LE(46));

  console.log('color ranges: 0 - 500');


  return bitmap;

};
