'use strict';
const fs = require('fs');

module.exports = {
  loadFile: (fileName) => {
    return new Promise((resolve, reject) => {
      fs.readFile(__dirname + `/../test/assets/${fileName}.bmp`, (err, data) =>{
        if(err) reject(err);
        resolve(data);
      });
    });
  },
  saveFile: (fileName, file) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(`${fileName}.bmp`, file, (err) => {
        if (err) reject(err);
        resolve('The file has been saved!');
      });
    })
  }
};
