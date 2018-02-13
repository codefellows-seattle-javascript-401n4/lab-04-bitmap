'use strict';



module.exports = function(buffer) {
  this.bmpHeader = buffer.slice(0, 10);
  this.dibHeader = buffer.slice(10, 55);
  this.colorPalette = buffer.slice(55, 1070);
  this.pixelArray = buffer.slice(1070);
  this.length = buffer.length;
};
