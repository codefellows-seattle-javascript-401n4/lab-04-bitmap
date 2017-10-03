'use strict';

const transform = module.exports = {};

transform.scale = (colorTable) => {
  var length = colorTable.readUInt32LE(10);
  if (length === 54) {
    length = colorTable.length;
  }
  for (var i = 54; i < length; i += 1) {
    colorTable[i] = 255;
  }

  return colorTable;

};

transform.random = (colorTable) => {
  let length = colorTable.readUInt32LE(10);
  if (length === 54) {
    length = colorTable.length;
  }
  for (var i = 54; i < length; i += 1) {
    colorTable[i] = Math.floor(Math.random() * 256);
  }

  return colorTable;

};

transform.invert = (colorTable) => {
  colorTable.forEach(function(value, index, array) {
    array[index] = 255 - value;
  });

  return colorTable;
};