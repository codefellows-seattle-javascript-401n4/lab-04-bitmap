'use strict';

const Bitmap = module.exports = {};

Bitmap.Constructor = function(headerInfo, dibHeader, colorTable, pixelArr) {
  this.headerInfo =  headerInfo;
  this.dibHeader = dibHeader;
  this.colorTable = colorTable;
  this.pixelArr = pixelArr;
};

