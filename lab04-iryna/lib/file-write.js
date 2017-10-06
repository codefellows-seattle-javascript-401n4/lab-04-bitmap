'use strict';
const fs = require('fs');

module.exports = (fileName, newBuffer,cb)=>{
  // console.log('in write-file:', fileName, newBuffer);
  fs.writeFile(fileName, newBuffer, (err, data)=>{
    if (err) return cb(err);
    return cb(null, data);
  });
}
