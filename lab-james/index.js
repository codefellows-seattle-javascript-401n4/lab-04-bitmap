'use strict';

const readFile = require('./lib/readfile.js');
const colorShift = require('./lib/color-shift.js');
const writeFile = require('./lib/writefile.js');


const newBitMap = function(oldAddress, transform, newAddress, ...args){

  let read = readFile(oldAddress);
  let transformedData = transform(read, ...args);

  writeFile(newAddress, transformedData);

};

// newBitMap('../asset/house.bmp', colorShift.shift1, '../asset/bitmap2.bmp', 54, 1077, 54);
