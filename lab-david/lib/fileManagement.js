'use strict';
const fs = require('fs');
const errorHandler = require('../lib/errorHandler.js');

module.exports = {
    loadFile: (fileName) => {
        return new Promise((resolve, reject) => {
            fs.readFile(`../asset/${fileName}.bmp`, (err, data) => {
                if (err) throw errorHandler(err);
                resolve(data);
            });
        });
    }
    // saveFile: (transformedFile, savePath) => {}
};