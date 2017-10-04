'use strict';

const jimp = require('jimp');
const transform = require('transform');

function convert (readPath, writePath) {
    jimp.read(`${readPath}`).then(function (sif) {
      sif.write(`${writePath}`);
    }).catch(function (err) {
      console.error(err);
    });
}
