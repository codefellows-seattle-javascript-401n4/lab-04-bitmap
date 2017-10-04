'use strict';
const writeFile = require('../lib/write-file.js');
const Color = require('../lib/color.js');

function BitMap(buffer) {
  this.headerField = buffer.toString('ascii', 0 , 2);
  this.numberOfBytes = buffer.readUInt32LE(2);
  this.pixelArrayOffset = buffer.readUInt32LE(10);
  if (this.pixelArrayOffset > 54) {
    this.width = buffer.readUInt32LE(18);
    this.height = buffer.readUInt32LE(22);
    this.colorDepth = buffer.readUInt16LE(28);
    this.numberOfColors = buffer.readUInt32LE(46);
    this.pallet = buffer.slice(54, this.pixelArrayOffset);
    this.palletColorMap();
  }
  this.pixelArray = buffer.slice(this.pixelArrayOffset);
  this.buffer = buffer;
}

BitMap.prototype.palletUpdate = function(){

  Object.keys(this.palletColors)
    .map((key, index) => {
      this.pallet[key] = this.palletColors[key].blue;
      this.pallet[Number(key) + 1] = this.palletColors[key].green;
      this.pallet[Number(key) + 2] = this.palletColors[key].red;
      this.pallet[Number(key) + 3] = this.palletColors[key].alpha;
    });
  this.buffer = Buffer.concat([this.buffer.slice(0, 54), this.pallet, this.buffer.slice(this.pixelArrayOffset)], this.buffer.length);
};

//r, g, b, a
BitMap.prototype.palletColorMap = function(){
  this.palletColors = this.pallet.reduce((acc, cur, index) => {
    if (index % 4 === 0) {
      let newColor = new Color([this.pallet[0 + index], this.pallet[1 + index], this.pallet[2 + index], this.pallet[3 + index]]);
      acc[index] = newColor;
    }
    return acc;
  }, {});
};

BitMap.prototype.setAll = function(channel, value){
  let bitmap = this;
  let newPallet = Object.keys(bitmap.palletColors).map((key, index) => {
    let color = bitmap.palletColors[key];
    color.setChannel(channel, value);
  });
  this.palletUpdate();
};

BitMap.prototype.edit = function(colorfunction){
  let bitmap = this;
  let newPallet = Object.keys(bitmap.palletColors).map((key, index) => {
    let color = bitmap.palletColors[key];
    color[colorfunction]();
  });
  this.palletUpdate();
};

BitMap.prototype.changeAll = function(channel, opperator, value){
  let bitmap = this;
  let newPallet = Object.keys(bitmap.palletColors).map((key, index) => {
    let color = bitmap.palletColors[key];
    color.changeChannel(channel, opperator, value);
  });
  this.palletUpdate();
};

BitMap.prototype.write = function(filePath){
  writeFile(__dirname + filePath, this.buffer);
};

module.exports = BitMap;
