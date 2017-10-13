'use strict';

const transformerRedder  = module.exports = function(bitmapBuffer){

  for(let i = 0; i < 256; i++){
    bitmapBuffer[54 + 4*i + 2] = 200;
  }
  return bitmapBuffer;
};
