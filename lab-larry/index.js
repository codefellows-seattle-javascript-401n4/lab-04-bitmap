'use strict';

// const readInOrder = require('./lib/');
// const fileList = process.argv.slice(2);
//
// readInOrder(fileList, function(err, data) {
//   if (err) throw err;
//
//   data.forEach((content) => {
//     console.log(content);
//   });
// });

const fileManage = require('./lib/fileManage.js');
fileManage.loadFile('bitmap').then(file => {
  fileManage.saveFile('updatedFile', file).then(message => console.log(message));
  });
