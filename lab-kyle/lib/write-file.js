'use strict';

const fs = require('fs');

const writeFile = module.exports = function (newImgUrl, transformFunction){

  fs.writeFileSync(newImgUrl, transformFunction);

};
