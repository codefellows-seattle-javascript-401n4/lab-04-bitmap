'use strict';

const invert = module.exports = function (buffer, palStart, palEnd){

  let header = buffer.slice(0, palStart);
  let pallete = buffer.slice(palStart, palEnd + 1);
  let image = buffer.slice(palEnd + 1);

  for(let i = 0; i <= pallete.length; i += 4){
    pallete[i] = 255 - 54 + i * 4;
  }

  let list = [header, pallete, image];
  let newBuffer = Buffer.concat(list);

  return newBuffer;

};
