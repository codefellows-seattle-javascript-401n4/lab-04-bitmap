'use strict';

module.exports = function(buffer) {
  this.bmpHeader = buffer.slice(0, 14);
  this.dibHeader = buffer.slice(14, 54);
  this.colorPalette = buffer.slice(54, 1078);
  this.pixelArray = buffer.slice(1078);
  this.length = buffer.length;
};
