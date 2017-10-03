'use strict';

const colorShift = module.exports = {};

colorShift.shift1 = function(buffer, paletteStart, paletteEnd, indexRemove){

  if(indexRemove >= paletteStart && indexRemove <= paletteEnd){

    let header = buffer.slice(0, paletteStart);
    let palette = buffer.slice(paletteStart + 1, paletteEnd + 1);
    let pixels = buffer.slice(paletteEnd + 1);
    let value = buffer.slice(indexRemove, indexRemove + 1);
    let list = [header, palette, value, pixels];

    let newBuffer = Buffer.concat(list);

    return newBuffer;

  }
};
