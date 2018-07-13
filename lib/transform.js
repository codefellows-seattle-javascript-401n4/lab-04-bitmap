'use strict';


module.exports = (option, bitmap, metaData) => {
  let colors = bitmap.slice(54, 1078);
  let newcolors = [];
  let success = true;

  if(option === 'randomize') {
    //Randomize...
    for(let i=0; i<colors.length; i+=4){
      newcolors[i] = Math.floor(Math.random() * (255 - 0) + 0);
      newcolors[i+1] = Math.floor(Math.random() * (255 - 0) + 0);
      newcolors[i+2] = Math.floor(Math.random() * (255 - 0) + 0);
      newcolors[i+3] = 0;
    }
    success = true;
  }


  if(option === 'grayscale'){
    //grayscale
    for(let i=0; i<colors.length; i+=4){
      let avg = (colors[i] + colors[i + 1] + colors[i + 2])/3;
      newcolors[i] = avg;
      newcolors[i+1] = avg;
      newcolors[i+2] = avg;
      newcolors[i+3] = 0;
    }
    success = true;
  }


  if(option === 'invert'){
   //invert
    for(let i=0; i<colors.length; i+=4){
      newcolors[i] = 255 - colors[i];
      newcolors[i+1] = 255 - colors[i+1];
      newcolors[i+2] = 255 - colors[i+2];
      newcolors[i+3] = 0;
    }
    success = true;
  }


  if(option === 'blueify'){
   //blueify
    for(let i=0; i<colors.length; i+=4){
      newcolors[i] = 255;
      newcolors[i+1] = colors[i+1];
      newcolors[i+2] = colors[i+2];
      newcolors[i+3] = 0;
    }
    success = true;
  }


  if(option === 'greenify'){
    //greenify
    for(let i=0; i<colors.length; i+=4){
      newcolors[i] = colors[i];
      newcolors[i+1] = 255;
      newcolors[i+2] = colors[i+2];
      newcolors[i+3] = 0;
    }
    success = true;
  }


  if(option === 'redify'){
    //redify
    for(let i=0; i<colors.length; i+=4){
      newcolors[i] = colors[i];
      newcolors[i+1] = colors[i+2];
      newcolors[i+2] = 255;
      newcolors[i+3] = 0;
    }
    success = true;
  }


  metaData.colorPalette = Buffer.from(newcolors, 54, 255);

  const buff = Buffer.concat([metaData.bmpHeader, metaData.dibHeader, metaData.colorPalette, metaData.pixelArray], metaData.length);

  if(!success) { return new Error('error'); }
  return buff;
};
