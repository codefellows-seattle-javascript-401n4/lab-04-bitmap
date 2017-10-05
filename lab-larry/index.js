'use strict';

const fileTransform = require('./lib/transformer.js')

const userChoice = {
  transform: process.argv[2],
  file: process.argv[3],
  newFile: process.argv[4]};

fileTransform(userChoice);
