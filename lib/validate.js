'use strict';


module.exports = (args, opts) => {

  let numArgs = 5;
  let isValid = true;
  if(args.length !== numArgs) { isValid = false; }
  if(!args[0].match(/node$/i)) { isValid = false; }
  if(!args[1].match(/index.js$/i)) { isValid = false; }
  if(args[2]) {
    if(!args[2].match(/.bmp$/i)) { isValid = false; }
  }

  if(args[3]) {
    if(!args[3].match(/.bmp$/i)) { isValid = false; }
  }

  if(args[4]){
    if((opts.indexOf(args[4]) === -1) || (opts === undefined)) { isValid = false; }
  }

  if(!isValid) {
    console.log('USAGE: node index.js ' + ' READ_FILE WRITE_FILE transform');
    console.log('Transform options: "invert", "grayscale", "randomize", "blueify", "greenify", "redify"');
    return(false);

  } else {
    return true;
  }
};
