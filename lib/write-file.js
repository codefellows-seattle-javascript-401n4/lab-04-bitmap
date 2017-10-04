'use strict';

const fs = require('fs');

const writeFile = {} = function (filepath, buffer){
  fs.writeFile(filepath, buffer, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
};

module.exports = writeFile;
