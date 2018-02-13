'use strict';



const fs = require('fs');



module.exports = (file, opt, buffer, cb) => {
  fs.writeFile(__dirname + `/../test/asset/${opt}-${file}`, buffer, (err) => {
    if (err) return cb(err);
    console.log('successfull');
    return(null, cb);
  });
};
