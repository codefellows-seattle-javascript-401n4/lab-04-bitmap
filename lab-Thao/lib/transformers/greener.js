'use strict';

const transformerGreener = module.exports = function(bitmapBuffer){
  for(let i = 0; i < 256; i++){
    bitmapBuffer[54 + 4*i + 1] = 180;
  }
  return bitmapBuffer;
};
