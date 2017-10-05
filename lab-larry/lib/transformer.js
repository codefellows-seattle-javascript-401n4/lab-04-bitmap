'use strict';

const fileManage = require('./fileManage.js');

module.exports = (userChoice) => {
  fileManage.loadFile(userChoice.file).then(returnData => {
    switch(userChoice.transform) {
    case 'black':
        black(returnData, userChoice.newFile);
        break;
    case 'blueScale':
        blueScale(returnData, userChoice.newFile);
        break;
    case 'greyScale':
      greyScale(returnData, userChoice.newFile);
      break;
    case 'inverted':
      inverted(returnData, userChoice.newFile);
    default:
      console.log('Please choose from: black, blueScale, greyScale, or inverted');
}
  }).catch(err => console.log(err));

}

let black = (file, newFile) => {

  let paletteEnd = file.readUInt32LE(10);

  for(var i = 54; i < paletteEnd; i+=4){
    file[i] = 0;
    file[i+1] = 0;
    file[i+2] = 0;
  }
    fileManage.saveFile(newFile, file);
}

let blueScale = (file, newFile) => {

  let paletteEnd = file.readUInt32LE(10);

  for(var i = 54; i < paletteEnd; i+=4){
    let r = file[i];
    let g = file[i + 1];
    let b = file[i + 2];
    let a = file[i + 3];

    file[i] = r;
    file[i+1] = ((((g + b) / 2)/(256*2))* r);;
    file[i+2] = ((((g + b) / 2)/(256*2))* r);;
  }
    fileManage.saveFile(newFile, file);
}

let greyScale = (file, newFile) => {

  let paletteEnd = file.readUInt32LE(10);

  for(var i = 54; i < paletteEnd; i+=4){
    let r = file[i];
    let g = file[i + 1];
    let b = file[i + 2];
    let a = file[i + 3];

    file[i] = ((r + g + b) / 3);
    file[i+1] = ((r + g + b) / 3);
    file[i+2] = ((r + g + b) / 3);
  }
    fileManage.saveFile(newFile, file);
}

let inverted = (file, newFile) => {

  let paletteEnd = file.readUInt32LE(10);

  for(var i = 54; i < paletteEnd; i+=4){
    file[i] = 255 - file[i];
    file[i+1] = 255 - file[i+1];
    file[i+2] = 255 - file[i+2];
  }
    fileManage.saveFile(newFile, file);
}
