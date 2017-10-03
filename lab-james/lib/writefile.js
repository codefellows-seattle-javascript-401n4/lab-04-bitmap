'use strict';

const fs = require('fs');

const writeFile = module.exports = function(address, buffer){

  fs.writeFileSync(address, buffer);

};
