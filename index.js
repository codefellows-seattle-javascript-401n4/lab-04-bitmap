'use strict';



const readFile = require('./lib/read-file.js');
const writeFile = require('./lib/write-file.js');
const colorHue = require('./lib/color-hue.js')


const newBitMap(oldBit, transform, newBit, ...args) => {
  let read = readFile(oldBit);
  let transform = transform(read, ...args);

  writeFile(newBit, transform);

};
