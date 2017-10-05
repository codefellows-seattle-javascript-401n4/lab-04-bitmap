'use strict';

const fs = require('fs');
const bitmap = require('./bitmap.js');

let readWrite = module.exports = {};

readWrite.read = (filePath, outputPath, transform, callback) => {
  return fs.readFile(filePath, (err, data) => {
    let headerInfo = data.slice(0, 14);
    let dibHeader = data.slice(14, 54);
    let colorTable = data.slice(54, 1078);
    let pixelArr = data.slice(1078);
    let image = new bitmap.Constructor(headerInfo, dibHeader, colorTable, pixelArr);

    transform(image.colorTable);
    callback(outputPath, data, (val) => val);
  });
};

readWrite.write = (outputPath, buff, callback) => {
  fs.writeFile(outputPath, buff , (err) =>{
    if(err) {
      console.error(err);
    } else {
      if(!callback) callback(true);
    }
  });
};