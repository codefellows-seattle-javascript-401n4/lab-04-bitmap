'use strict';


const bp = require('./lib/bitmap.js');

let args = process.argv.splice(2);
let path = args[0];
let xform = args[1];

let runBitmap = (path,xform) => {
  bp(path,xform,(err,results) => {
    if (err) console.log(err);
    return (err,results);
  });
};


runBitmap(path,xform);
