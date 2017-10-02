'use strict';

const invert = module.exports = function (buffer, palStart, palEnd){

  let header = buffer.slice(0, palStart);
  let pallete = buffer.slice(palStart, palEnd + 1);
  let image = buffer.slice(palEnd + 1);

  // console.log(header.length);
  // console.log(pallete.length);

  for(let i = 0; i <= pallete.length; i++){
    pallete[i] = 256 - i;

  }
  console.log(pallete);

  let list = [header, pallete, image];
  let newBuffer = Buffer.concat(list);

  return newBuffer;

};
