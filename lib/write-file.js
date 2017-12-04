'use strict';



const fs = require('fs');

const writeFile = module.exports (address, buffer) => {
  fs.writeFileSync(address, buffer);

};
