'use strict';

const fs = require('fs');
const fileManager = require('./fileManagement.js');
const errorHandler = require('./errorHandler.js');

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
        })).catch(err => reject(err));
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

let blacken = (bmpPreTransform, savePath) => {
    for (let i = bmpPreTransform.startPalette; i < bmpPreTransform.endPalette; i +=4 ) {

        bmpPreTransform.wholeFile[i] = 0;
        bmpPreTransform.wholeFile[i + 1] = 0;
        bmpPreTransform.wholeFile[i + 2] = 0;
        bmpPreTransform.wholeFile[i + 3] = 0;



    }
    return fileManager.saveFile(bmpPreTransform.wholeFile, savePath);
};


module.exports = (userChoices) => {
    parseBitMapFileInfo(userChoices['fileToTransform']).then(data => {
        switch(userChoices['transformation']) {
        case 'greyScale':
            greyScale(data, userChoices['newFilePath']);
            break;
        case 'blacken':
            blacken(data, userChoices['newFilePath']);
            break;

        case 'blueScale':
            blueScale(data, userChoices['newFilePath']);
            break;
        case 'invert':
            invert(data, userChoices['newFilePath']);
            break;
        default:
            console.log(`\nThe function you typed did not match your options:
                greyScale, blacken, blueScale, invert.

                Please try again.
            `);
        }
    }).catch(err => console.log(err));
};