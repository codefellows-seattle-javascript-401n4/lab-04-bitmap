'use strict';

const writeFile = require('../lib/write-file.js');

const newBitmap = module.exports = function(transformFunction, newImgUrl){

  let transform = transformFunction;
  writeFile(newImgUrl, transform);

  console.log(newImgUrl);

};
