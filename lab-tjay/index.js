'use strict';

let bitmap = require('./lib/bitmap.js');

let convertImage = (file) => {
  bitmap.readFromFile(file, (data) => {  
    let img = new bitmap.Image(data, file);
    console.log(img.colorTable);
    img.grayImg();
  });
};

convertImage('./asset/palette-bitmap.bmp');