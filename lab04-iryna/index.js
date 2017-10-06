'use strict';
const readFile = require('../lab04-iryna/lib/file-read.js');
const metaConstructor = require('../lab04-iryna/lib/constructor.js');
const transformFile = require('../lab04-iryna/lib/transform.js');
const writeFile = require('../lab04-iryna/lib/file-write.js');

const transformations = ['invert', 'rotate', 'randomize','frame'];
const cliArgs = process.argv;

let oldFile = process.argv[2];
let newFile = process.argv[3];
let transformation = process.argv[4];


readFile(`../asset/${oldFile}`, function(err,data){
  // console.log('bitmap:', data);
  new metaConstructor(data, function(err, data){
    console.log('first palette:', data.colorPalette);
      transformFile( data, transformation, function(err, data){
      console.log('new palette:', data.colorPalette);
      let newBuffer = Buffer.concat([data.BitmapHeader, data.DIBHeader, data.colorPalette, data.pixelArray], data.length);
      writeFile(`../asset/${newFile}`, newBuffer, function(err, data){
        console.log('success!')
      });
    });
  });
})
