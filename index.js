'use strict';

const readFile = require('./lib/readFile.js');
const writeFile = require('./lib/writeFile.js');
const transformFile = require('./lib/transformFile.js');

const transform = module.exports = function(){
  return readFile('./asset/bitmap.bmp', function(err, bitmap) {
    if  (err) return console.error(err);
    transformFile.makePink(bitmap);
    return writeFile('./output/output.bmp', bitmap, function(err) {
      if  (err) return console.error(err);
    });
  });
};
transform();
