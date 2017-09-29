'use strict';

const fs = require('fs');
const errorHandler = require('../lib/errorHandler.js');
const fileManager = require('./fileManagement.js');

let parseBitMapFileInfo = (filename) => {
    return new Promise((resolve, reject) => {

        resolve(fileManager.loadFile(filename).then(file => {
            const bmp = {dibBuffer: 0};
            bmp.type = file.toString('ascii', 0, 2);
            bmp.headerSize = 14;
            bmp.dib = file.readUInt16LE(14);
            bmp.startPalette = bmp.dib + bmp.headerSize;
            bmp.bitMapSize = file.readUInt32LE(2);
            bmp.endPalette = file.readUInt32LE(10);
            bmp.bitsPerPixel = file.readUInt16LE(28);
            //bmp.wholeFile = bitmap;
            return bmp;
        }));
    });
};

parseBitMapFileInfo(path).then(data => console.log(data));
let grayScale = (bmpPreTransform, savePath) => {
    // logic here for transforming file
    return fileManager.saveFile(transformedFile, savePath);
};



module.exports = (fileNameToTransform,savePath) => {
    return new Promise((resolve,reject) => {
        parseBitMapFileInfo(fileNameToTransform).then(data => {
            resolve(grayScale(data, savePath));    
        });
    });
}