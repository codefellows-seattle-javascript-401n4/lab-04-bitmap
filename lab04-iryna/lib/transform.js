'use strict';
const fs = require('fs');
//inverting colors:

module.exports = (buffer, transformation, cb)=>{
if (transformation ===  "invert" ){
  for (var i = 0; i<=(buffer.colorPalette.length-4); i = i+4){
  buffer.colorPalette[i] = 255 - buffer.colorPalette[i];
  buffer.colorPalette[i+1] = 255 - buffer.colorPalette[i+1];
  buffer.colorPalette[i+2] = 255 - buffer.colorPalette[i+2];
}
}

if (transformation === "randomize"){
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  for (var i = 0; i<=(buffer.colorPalette.length-4); i = i+4){
    buffer.colorPalette[i] = getRandomArbitrary(0, 255);
    buffer.colorPalette[i+1] = getRandomArbitrary(0, 255);
    buffer.colorPalette[i+2] = getRandomArbitrary(0, 255);
  }
}

if (transformation === "rotate"){
  let temp;
  let counter = 0;
  for (var i = 0; i<(buffer.pixelArray.length/2); i++){
      temp = buffer.pixelArray[i];
      buffer.pixelArray[i] = buffer.pixelArray[10000-counter];
      buffer.pixelArray[10000-counter]=temp;
      counter++;
   }
}

if (transformation === "frame"){
      let color = '#7878f0';
      //top an bottom
      for (var i=0; i<100; i++){
        buffer.pixelArray[i] = color;
        buffer.pixelArray[100+i] = color;
        buffer.pixelArray[200+i] = color;
        buffer.pixelArray[9700+i]=color;
        buffer.pixelArray[9800+i] = color;
        buffer.pixelArray[9900+i] =color
      }
      //sides
      for (var i = 3; i<=97; i++){
        buffer.pixelArray[i*100]=color;
        buffer.pixelArray[i*100+1] = color;
        buffer.pixelArray[i*100+2] = color;
        buffer.pixelArray[i*100+97] = color;
        buffer.pixelArray[i*100+98] = color;
        buffer.pixelArray[i*100+99] = color;

      }
 }
 console.log('palette form transform:', buffer.colorPalette);
 return cb(null, buffer);
}
