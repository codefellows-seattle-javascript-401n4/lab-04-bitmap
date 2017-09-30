'use strict';

const fs = require('fs');

let fileReader = {};
//with promise
let readFile = function(path) {
  return new Promise(function(resolve, reject){
    fs.readFile(__dirname + path, (err, data) => {
      if (err) reject (err);
      // console.log(`got data ${data.toString()}`)
      resolve (data);
    });
  });
};

fileReader.getFiles = function(...filesPaths) {
  let ret = {};
  console.log(`looking up ${filesPaths.length} files`);
  filesPaths.forEach((el, index) => readFile(el).then(data => {
    ret[index] = data.toString();
    if (Object.keys(ret).length === filesPaths.length) {
      console.log('got all data, promise');
      for (let file in ret) {
        console.log(ret[file]);
      }
    }
  }).catch(err => {
    console.error (err);
  }));
};

let ret = [];

//with callback
let readFileCB = function(path, array) {
  return fs.readFile(__dirname + path, (err, data) => {
    if (err) return (err);
    ret.push( data.toString());
    getFilesCB(array);
  });
};

let getFilesCB = fileReader.getFilesCB = function(filesPaths) {
  if (filesPaths.length > 0) {
    let current = filesPaths.splice(0,1);
    readFileCB(current[0], filesPaths);
  } else {
    console.log('got all data, callback ');
    ret.forEach(ele => {
      console.log(ele);
    });
  }
};

//FROM CLASS!!
fileReader.readFilesInOrder = function(fileList, cb) {
  cb = cb || function () {};
  if (!Array.isArray(fileList)) {
    return cb (new Error('the first parameter has to be an array')); //generating our own error
  }
  let completed = 0;
  let dataArray = [];
  fileList.map((filename, index) => {
    fs.readFile(filename, (err, data) => {
      if (err) return cb(err);
      dataArray[index] = data.toString();
      completed ++;
      if (completed === fileList.length) {
        cb(null, dataArray);
      }
    });
  });
};

module.exports = fileReader ;
