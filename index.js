//Get the arguments from the command line

'use strict';

const readFile = require('./lib/readFile.js');
const writeFile = require('./lib/writeFile.js');
const bpMeta = require('./lib/metaConstr.js');
const transform = require('./lib/transform.js');
const validateArgs = require('./lib/validate.js');

const cli_args = process.argv;
const transformOptions = ['invert', 'randomize', 'grayscale', 'blueify', 'redify', 'greenify'];

let doAllTheThings = module.exports = () => {

  let fileName = cli_args[2];
  let newfile = cli_args[3];
  let option = cli_args[4];


  let manipulateBitmap = (err, data) => {
    if(err) { throw(err);}
    else {
      const bitmap = data;
      const bmp = new bpMeta(bitmap);
      const buff = transform(option, bitmap, bmp);

      writeFile(newfile, option, buff, function (err) {
        if(err) console.log(err);
      });
    }
  };

  readFile(fileName, manipulateBitmap);
};

if(!validateArgs(cli_args, transformOptions)) { process.exit(1); }
doAllTheThings();
