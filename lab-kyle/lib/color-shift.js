'use strict';

const colorShift = module.exports = {};

colorShift.shift1 = function (buffer, palStart, palEnd, removeIndex) {

  if( removeIndex >= palStart && removeIndex <= palEnd) {

    let header = buffer.slice(0, palStart);
    let pallete = buffer.slice(palStart + 1, palEnd + 1);
    let value = buffer.slice(removeIndex, removeIndex + 1);
    let image = buffer.slice(palEnd + 1);

    let newBuffer = header.concat(pallete, value, image);

    return newBuffer;
  }
};
