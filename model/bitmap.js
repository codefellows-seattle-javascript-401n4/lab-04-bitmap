'use strict';
const fs = require('fs');

module.exports = function(buffer){
  this.buffer = buffer;
  this.id = buffer.readUInt32LE(0);
  this.width = buffer.readUInt32LE(18);
  this.filesize = buffer.readUInt32LE(2);
  this.numOfPixels = buffer.readUInt32LE(28);
  this.pixalArray = buffer.readUInt32LE(14);
  this.offset = buffer.readUInt32LE(10);
  this.height = buffer.readUInt32LE(22);
  this.colorArray = buffer.slice(54, this.offset);
};
