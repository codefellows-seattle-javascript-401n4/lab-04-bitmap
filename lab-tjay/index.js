'use strict';

let bitmap = require('./lib/bitmap.js');

let convertImage = (file) => {
  bitmap.readFromFile(file, (data) => {
      console.log(file);
      console.log(data);      
    let img = new bitmap.Image(data, file);
    img.invertImg();
  });
};

convertImage('./asset/palette-bitmap.bmp');