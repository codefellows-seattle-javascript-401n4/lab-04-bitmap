'use strict';

const transformerBluer = module.exports = function(bitmapBuffer){

  for(let i = 0; i < 256; i++) {
    bitmapBuffer[54 + 4*i] = 255;
  }
  return bitmapBuffer;
};

//each color has 8 bits per channel, 8 bits for blue, 8 bits for green, 8 bits for red, 8 bits for alpha.  8 bits in decimal equals to 255 in binary.  0 means no blue and 255 is max. blue you can get
//start at color 0 and stop at color # 255
