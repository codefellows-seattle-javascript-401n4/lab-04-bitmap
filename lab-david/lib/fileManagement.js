'use strict';
const fs = require('fs');;

module.exports = {
    loadFile: (fileName) => {
        return new Promise((resolve,reject) => {
            fs.readFile(__dirname + `/../asset/${fileName}.bmp`, (err, data) => {
                if (err) reject('Did not manage to load a file');
                resolve(data);
            });
        });
    },
    saveFile: (transformedFile, savePath) => {
        return new Promise ((resolve, reject) => {
            fs.writeFile(`${savePath}.bmp`, transformedFile, (err) => {
                if (err) reject('Did not manage to save the file');
                console.log('File Saved!');
                resolve('File Saved!');
            });
        });
    },
};