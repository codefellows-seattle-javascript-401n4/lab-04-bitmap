'use strict';

const fs = require('fs');

module.exports = (path,xform,cb) => {
  fs.readFile(path, (err,data) => {
    if(err) cb(err);
    let colorArray = ['blue','green','red','alpha'];

    if(colorArray.indexOf(xform) == - 1){
      return cb(new Error(colorArray + ' is not a valid arguement'));
    }

    if(data.slice(0,2).toString() != 'BM'){
      return cb(new Error('Can only read Bitmap Files'));
    }

    if(data.length < 1081){
      return cb(new Error('File is too short to be a bitmap'));
    }

    if(data.readUInt32LE(10) != 1078){
      return cb(new Error('Invalid file expected to see pixel array start at 1078'));
    }

    console.log('reading file \'' + path + '\'...');

    function MetaDataOfBM(data){
      this.headerField = data.slice(0,2).toString();
      this.size = data.readUInt32LE(14);
      this.width = data.readUInt16LE(18);
      this.height = data.readUInt16LE(20);
      this.colorPlanes = data.readUInt16LE(22);
      this.depth = data.readUInt16LE(24);

    }

    let fileOfMetaData = new MetaDataOfBM(data);
    console.log(fileOfMetaData);


    let bufHead = data.slice(0,14);
    let bufDib = data.slice(14,54);
    let colorBuf = data.slice(54,1078);
    let pixArray = data.slice(1078);

    let colorTable = Array.prototype.slice.call(colorBuf);

    if (xform === 'blue'){
      for (let i = 0; i < colorTable.length; i){
        colorTable[i] = 255;
        i = i + 4;
      }
    }

    if (xform === 'green'){
      for (let i = 1; i < colorTable.length; i){
        colorTable[i] = 255;
        i = i + 4;
      }
    }

    if (xform === 'red'){
      for (let i = 2; i < colorTable.length; i){
        colorTable[i] = 255;
        i = i + 4;
      }
    }

    if(xform === 'alpha'){
      for (let i = 0; i < colorTable.length;i){
        let avg = (colorTable[i] + colorTable[i + 1] + colorTable[i + 2])/3;
        colorTable[i] = avg;
        colorTable[i + 1] = avg;
        colorTable[i + 2] = avg;
        i = i + 4;
      }
    }

    let colorTableBuffNew = Buffer.from(colorTable);
    let fileBuf = Buffer.concat([bufHead,bufDib,colorTableBuffNew,pixArray], data.length);

    let newFilePath = path.slice(0,-4) + '-' + xform + '.bmp';

    fs.writeFile(newFilePath,fileBuf, (err) => {
      if (err)
        cb(new Error(err));
      console.log(err);
      return cb(null,fileBuf.readUInt32LE(58));
    });
  });
};
