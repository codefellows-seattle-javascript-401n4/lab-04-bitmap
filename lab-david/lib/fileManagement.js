'use strict';
const fs = require('fs');
const errorHandler = require('./errorHandler.js');

module.exports = {
    loadFile: (fileName) => {
        return new Promise((resolve,reject) => {
            fs.readFile(__dirname + `/../asset/${fileName}.bmp`, (err, data) => {
                if (err) {
                    errorHandler(err);
                    reject(err);
                }
                resolve(data);
            });
        });
    },
    saveFile: (transformedFile, savePath) => {
        return new Promise ((resolve) => {
            fs.writeFile(`${savePath}.bmp`, transformedFile, (err) => {
                if (err) throw errorHandler(err);
                resolve(console.log('File Saved!'));
            });
        });
    },
};