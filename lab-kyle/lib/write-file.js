'use strict';

const fs = require('fs');

const writeFile = module.exports = function (newImgUrl, func){

  fs.writeFileSync(newImgUrl, func);

};
