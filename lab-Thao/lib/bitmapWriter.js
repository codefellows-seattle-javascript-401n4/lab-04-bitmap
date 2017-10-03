'use strict';

const fs = require('fs');

const bitmaWriter = module.exports = function(newFilePath, data) {
  fs.writeFileSync(newFilePath, data);
};
