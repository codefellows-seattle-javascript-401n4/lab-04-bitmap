'use strict';
const fs = require('fs');

module.exports = (path, cb)=>{
  fs.readFile(path, (err,data)=>{
    if (err) return cb(err);
    // console.log(data);
    return cb(null, data);
  });
}
