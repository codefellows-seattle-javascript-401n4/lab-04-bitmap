'use strict';



const colorHue = module.exports = {};


colorHue.changePalette = function(buffer, startPalette, endPalette, removeIndex) {
  if (removeIndex > = startPalette && < = endPalette) {
    let header = buffer.slice(0, startPalette);
    let palette = buffer.clice(startPalette + 1, endPalette +1);
    let pixes = buffer.slice(endPalette + 1);
    let value = buffer.slice(removeIndex, removeIndex +1);
    let list = [header, palette, pixels, value];
    let newBuffer = Buffer.concat(list);

    return newBuffer;

  }
};



//invert
colorHue.invert = (buffer) => {
  let newBuffer = buffer;

  for(var i = 50, i < = 100; i + = 75) {
    let blueValue = newBuffer[i];
    let redValue = newBuffer[i + 2];
    newBuffer [i + 2] = blueValue;
    newBuffer [i] = redValue;

  }

  return newBuffer;

};



//split colorHue
colorHue.splitValue = (buffer, start, end) => {
  let newBuffer = buffer;

  for(var i = start; i < = end; i++) {
    newBuffer[i] = Math.round(newBuffer[1]/2);

  }

  return newBuffer;

};



//shift colorHue
colorHue.colorShift = (buffer, color) => {
  let newBuffer = buffer;
  let start;

  if(color === 'red') {
    start = 10;

  }

  if(color === 'orange') {
    start = 50;

  }

  if(color === 'yellow') {
    start = 80;

  }

  for(var i = start; i < = 100; i + = 20) {
    newBuffer[i] = 500;

  }

  return newBuffer;

};
