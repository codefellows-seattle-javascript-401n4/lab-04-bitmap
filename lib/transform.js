'use strict';

const transform = module.exports = {};

transform.scale = (colorTable) => {
  for (var i = 54; i < colorTable.length; i += 4) {
    colorTable[i] = 255;
  }

  return colorTable;

};

transform.random = (colorTable) => {
  for (var i = 54; i < colorTable.length; i += 4) {
    colorTable[i] = (Math.random() * 256);
  }

  return colorTable;

};


transform.invert = (colorTable) => {
  colorTable.forEach(function(value, index, array) {
    array[index] = 255 - value;
  });

  return colorTable;
};