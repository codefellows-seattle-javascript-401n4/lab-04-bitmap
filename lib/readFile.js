'use strict';



const fs = require('fs');



module.exports = (file, cb) => {
  fs.readFile(__dirname + `/../test/asset/${file}`, (err, data) => {
    if (err) { return cb(err); }
    cb(null, data);
  });
};
