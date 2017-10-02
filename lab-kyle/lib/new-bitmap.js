'use strict';

const writeFile = require('../lib/write-file.js');

const newBitmap = module.exports = function(transformFunction, newImgUrl){

  // readFile(oldImg);
  let transform = transformFunction;
  writeFile(newImgUrl, transform);

};
