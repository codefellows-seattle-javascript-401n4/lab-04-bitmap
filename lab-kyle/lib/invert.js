'use strict';

const invert = module.exports = function (buffer, palStart, palEnd){

  let header = buffer.slice(0, palStart);
  let pallete = buffer.slice(palStart, palEnd + 1);
  let image = buffer.slice(palEnd + 1);

  for(let i = 0, n = image.length; i < n; i += 4){
    image[i] = image[i] - 255;
    image[i + 1] = image[i + 1] - 255;
    image[i + 2] = image[i + 2] - 255;
    image[i + 3] = image[i + 3] - 255;
  }

  let list = [header, pallete, image];
  let newBuffer = Buffer.concat(list);

  return newBuffer;

};
