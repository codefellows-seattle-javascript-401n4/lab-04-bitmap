'use strict';

const fs = require('fs');

module.exports = (path, file, cb) => {
  fs.readFile(path + 'test/asset/' + file, (err, data) => {
    if (err) { return cb(err); }
    cb(null, data);
  });
};
