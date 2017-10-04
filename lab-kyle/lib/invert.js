'use strict';

const invert = module.exports = function (buffer, palStart, palEnd){

  let header = buffer.slice(0, palStart);
  let pallete = buffer.slice(palStart, palEnd + 1);
  let image = buffer.slice(palEnd + 1);

  for(let i = 0; i < pallete.length; i += 4){

    let red = pallete[i];
    let green = pallete[i + 1];
    let blue = pallete[i + 2];
    let alpha = pallete[i + 3];

    pallete[i] = 255 - red;
    pallete[i + 1] = 255 - green;
    pallete[i + 2] = 255 - blue;
    pallete[i + 3] = 255 - alpha;
    
  }

  let list = [header, pallete, image];
  let newBuffer = Buffer.concat(list);

  return newBuffer;

};
