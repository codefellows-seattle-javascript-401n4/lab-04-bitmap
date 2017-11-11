'use strict';

const transform = module.exports = {};

transform.scale = (colorTable,colorTarget) => {
  for (var i = 0; i < colorTable.length; i+= 4) {
    if(colorTarget === 'blue')
      colorTable[i] = 255; //Blue
    else if (colorTarget === 'green')
      colorTable[i+1] = 0; //Green
    else if (colorTarget === 'red') 
      colorTable[i+2] = 0; //Red
  }
  return colorTable;
};

transform.greyScale = (colorTable) => {
  let greyScale;
  for (var i = 0; i < colorTable.length; i+= 4) {
    greyScale = (colorTable[i] + colorTable[i+1] + colorTable[i+2]) / 3;
    colorTable[i] = colorTable[i+1] = colorTable[i+2] = greyScale;
  }
  return colorTable;
};

transform.invert = (colorTable) => {
  for (var i = 0; i < colorTable.length; i+= 4){
    colorTable[i] = (255-colorTable[i]);
    colorTable[i+1] = (255-colorTable[i+1]);
    colorTable[i+2] = (255-colorTable[i+2]);
  }
  return colorTable;
};
