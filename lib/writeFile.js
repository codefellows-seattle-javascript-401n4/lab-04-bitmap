'use strict';

const fs = require('fs');

module.exports = (path, file, opt, buffer, cb) => {
  fs.writeFile(path + 'test/asset/' + opt + '-' + file, buffer, (err) => {
    if (err) return cb(err);
    console.log('Successfully transformed image!');
    return(null, cb);
  });
};
