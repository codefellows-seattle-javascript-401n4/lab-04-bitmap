'use strict';




const transformFile = module.exports = {};

transformFile.randomColors = function(bitmap) {
  for (let i = 0; i < bitmap.colorArray.length; i+= 4) {
    bitmap.colorArray[i] = Math.floor(Math.random() * 255) + 1;
    bitmap.colorArray[i + 1] = Math.floor(Math.random() * 255) + 1;
    bitmap.colorArray[i + 2] = Math.floor(Math.random() * 255) + 1;
  }
};



transformFile.invert = (bitmap) => {
  bitmap.colorArray.forEach(function(val, index, arr) {
    arr[index] = 255 - val;
  });

  return bitmap;
};

transformFile.makePink = (bitmap) => {
  for (var i = 54; i < bitmap.colorArray.length; i += 4) {
    bitmap.colorArray[i] = 255;
  }
};
