'use strict';

const bitMap = require('../lib/bitMap.js');
const transformation = {};

//taken from:
//https://www.johndcook.com/blog/2009/08/24/algorithms-convert-color-grayscale/
transformation.luminosity = function(buffer, name) {
  let newbitMap = new bitMap(buffer);
  newbitMap.changeAll('red', 'multiply', 0.21);
  newbitMap.changeAll('green', 'multiply', 0.72);
  newbitMap.changeAll('blue', 'multiply', 0.07);
  newbitMap.write('/../__test__/asset/luminosity_' + name + '.bmp');
};

transformation.toBlue = function(buffer, name) {
  let newbitMap = new bitMap(buffer);
  newbitMap.setAll('blue', 255);
  newbitMap.write('/../__test__/asset/toBlue_' + name + '.bmp');
};

transformation.lightness = function(buffer, name) {
  let newbitMap = new bitMap(buffer);
  newbitMap.edit('lightness');
  newbitMap.write('/../__test__/asset/lightness_' + name + '.bmp');
};

transformation.average = function(buffer, name) {
  let newbitMap = new bitMap(buffer);
  newbitMap.edit('average');
  newbitMap.write('/../__test__/asset/average_' + name + '.bmp');
};

module.exports = transformation;
