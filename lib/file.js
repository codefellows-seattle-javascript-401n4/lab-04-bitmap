'use strict';



const fs = require('fs');
const file = module.exports = {};


//checking file
file.read = function(input) {
  if(fs.existsSync(input)){
    console.log('file confirmed');
    return getBuffer(input);
  } else {
    console.log('file missing');
    return null;
  }
};


//write file
file.write = function(data, newFileName) {
  fs.writeFile(newFileName, data, (err) => {
    if(err){
      console.log(err);
      return;
    } console.log('transform confirmed');
  });
};


//buffer
let getBuffer = function(input) {
  let bitmap = fs.readFileSync(input);
  return bitmap;
};
