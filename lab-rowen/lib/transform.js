'use strict';

const fs = require('fs');
const errorHandler = require('../lib/errorHandler.js');
const fileManager = require('./fileManagement.js');

let parseBitMapFileInfo = (file) => {
    return new Promise((resolve, reject) => {

        resolve(fileManager.loadFile(file).then(file => {
            const bmp = {dibBuffer: 0};
            bmp.type = file.toString('ascii', 0, 2);
            bmp.headerSize = 14;
            bmp.dib = file.readUInt16LE(14);
            bmp.startPalette = bmp.dib + bmp.headerSize;
            bmp.bitMapSize = file.readUInt32LE(2);
            bmp.endPalette = file.readUInt32LE(10);
            bmp.bitsPerPixel = file.readUInt16LE(28);
            bmp.wholeFile = file;
            return bmp;
        }));
    });
};

// invert works
let invert = (bmpPreTransform, savePath) => {

    for (let i = bmpPreTransform.startPalette; i < bmpPreTransform.endPalette; i +=4 ) {
        let r = bmpPreTransform.wholeFile[i];
        let g = bmpPreTransform.wholeFile[i + 1];
        let b = bmpPreTransform.wholeFile[i + 2];
        let a = bmpPreTransform.wholeFile[i + 3];

        bmpPreTransform.wholeFile[i] = 255 - r;
        bmpPreTransform.wholeFile[i + 1] = 255 - g;
        bmpPreTransform.wholeFile[i + 2] = 255 - b;
    }
    return fileManager.saveFile(bmpPreTransform.wholeFile, savePath);
};

//greyscale works
let greyScale = (bmpPreTransform, savePath) => {
    for (let i = bmpPreTransform.startPalette; i < bmpPreTransform.endPalette; i +=4 ) {
        let r = bmpPreTransform.wholeFile[i];
        let g = bmpPreTransform.wholeFile[i + 1];
        let b = bmpPreTransform.wholeFile[i + 2];
        let a = bmpPreTransform.wholeFile[i + 3];

        bmpPreTransform.wholeFile[i] = ((r + g + b) / 3);
        bmpPreTransform.wholeFile[i + 1] = ((r + g + b)/3);
        bmpPreTransform.wholeFile[i + 2] = ((r + g + b) / 3);
    }
    return fileManager.saveFile(bmpPreTransform.wholeFile, savePath);
};

//bluescale works but is too dark
let blueScale = (bmpPreTransform, savePath) => {
    for (let i = bmpPreTransform.startPalette; i < bmpPreTransform.endPalette; i +=4 ) {
        let r = bmpPreTransform.wholeFile[i];
        let g = bmpPreTransform.wholeFile[i + 1];
        let b = bmpPreTransform.wholeFile[i + 2];
        let a = bmpPreTransform.wholeFile[i + 3];

        bmpPreTransform.wholeFile[i] = r;
        bmpPreTransform.wholeFile[i + 1] = ((((g + b) / 2)/(256*2))* r);
        bmpPreTransform.wholeFile[i + 2] = ((((g + b) / 2)/(256*2))* r);
    }
    return fileManager.saveFile(bmpPreTransform.wholeFile, savePath);
};

//redscale works
let redScale = (bmpPreTransform, savePath) => {
    for (let i = bmpPreTransform.startPalette; i < bmpPreTransform.endPalette; i +=4 ) {
        let r = bmpPreTransform.wholeFile[i];
        let g = bmpPreTransform.wholeFile[i + 1];
        let b = bmpPreTransform.wholeFile[i + 2];
        let a = bmpPreTransform.wholeFile[i + 3];

        bmpPreTransform.wholeFile[i] = ((((r + g) / 2)/(256*2))* b);
        bmpPreTransform.wholeFile[i + 1] = ((((r + g) / 2)/(256*2))* b);
        bmpPreTransform.wholeFile[i + 2] = b;


    }
    return fileManager.saveFile(bmpPreTransform.wholeFile, savePath);
};

parseBitMapFileInfo('bitmap').then((data) => {
    //invert(data, `${__dirname}/changed.bmp`);
    //greyScale(data, `${__dirname}/changed.bmp`);
    blueScale(data, `${__dirname}/changed.bmp`);
});


module.exports = (fileNameToTransform, savePath) => {
    return new Promise((resolve, reject) => {
        parseBitMapFileInfo(fileNameToTransform).then(data => {
            resolve(invert(data, savePath));
        });
    });
};
