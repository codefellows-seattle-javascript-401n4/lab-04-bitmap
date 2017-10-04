'use strict';

function Color(array){
  this.red = array[2];
  this.green = array[1];
  this.blue = array[0];
  this.alpha = array[3];
}

Color.prototype.changeChannel = function(channel, opperator, value) {
  let newValue;
  switch (opperator) {
  case 'divide':
    newValue = this[channel]/value;
    break;
  case 'subtract':
    newValue = this[channel] - value;
    break;
  case 'multiply':
    newValue = this[channel] * value;
    break;
  default:
    newValue = this[channel] + value;
  }
  newValue = Math.min(newValue, 256);
  newValue = Math.max(newValue, 0);
  this[channel] = newValue;
};

Color.prototype.lightness = function(){
  return (Math.max(this.red, this.green, this.blue) + Math.min(this.red, this.green, this.blue))/2.0;
}

Color.prototype.average = function(){
  return (this.red + this.green + this.blue, this.alpha)/4.0
}

Color.prototype.setChannel = function(channel, value) {
  this[channel] = value;
};


module.exports = Color;
