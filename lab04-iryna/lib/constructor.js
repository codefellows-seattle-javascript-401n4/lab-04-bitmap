'use strict';
const fs = require('fs');
 module.exports = function(buffer, cb) {
  //  console.log('from constructor: ', buffer);

  this.BitmapHeader = buffer.slice(0, 14);
  this.DIBHeader = buffer.slice(14, 54);
  this.colorPalette = buffer.slice(54, 1078);
  this.pixelArray = buffer.slice(1078);
  this.length = buffer.length;
  return cb(null, this);
 };
