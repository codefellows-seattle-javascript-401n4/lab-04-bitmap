'use strict';

const transformerDarker = module.exports = function(bitmapBuffer){

  for(let i = 0; i < 256; i++) {
    let blue = (bitmapBuffer[54 + 4*i])/2;
    let green = (bitmapBuffer[54 + 4*i + 1])/2;
    let red = (bitmapBuffer[54 + 4*i + 2])/2;
    let alpha = (bitmapBuffer[54 + 4*i + 3])/2;

    bitmapBuffer[54 + 4*i] = blue;
    bitmapBuffer[54 + 4*i + 1] = green;
    bitmapBuffer[54 + 4*i + 2] = red;
    bitmapBuffer[54 + 4*i + 3] = alpha;
  }

  return bitmapBuffer;
};
