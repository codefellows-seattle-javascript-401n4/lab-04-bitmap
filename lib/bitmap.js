'use strict';

const fs = require('fs');

module.exports = (path,colorArray,cb) => {
  fs.readFile(path, (err,data) => {
    if(err) cb(err);
    let colorArray = ['blue','green','red','alpha'];

    if(colorArray.indexOf(colorArray) === - 1){
      return cb(new Error(colorArray + ' is not a valid'));
    }

    if(colorArray.slice(0,2).toString() != 'BM'){
      return cb(new Error('Can only read Bitmap Files'));
    }

    if(data.length < 1081){
      return cb(new Error('File is too short to be a bitmap'));
    }

    if(data.readUInt32LE(10) != 1078){
      return cb(new Error('Invalid file expected to see pixel array start at 1078'));
    }

    function MetaDataOfBM(data){
      this.headerField = data.slice(0,2).toString();
      this.size = data.readUInt32LE(14);
      this.width = data.readUInt16LE(18);
      this.height = data.readUInt16LE(20);
      this.colorPlanes = data.readUInt16LE(22);
      this.depth = data.readUInt16LE(24);

    }

    let fileOfMetaData = new MetaDataOfBM(data);



    let bufHead = data.slice(0,14);
    let bufDib = data.slice(14,54);
    let colorBuf = data.slice(54,1078);
    let pixArray = data.slice(1078);

    let colorTable = Array.prototype.slice.call(colorBuf);

    if(colorArray === 'red'){
      for(i)
    }
  });
};
