'use strict';

function Color(array){
  this.red = array[0]
  this.green = array[1]
  this.blue = array[2]
  this.alpha = array[3]
}

Color.prototype.changeChannel = function(channel, opperator, value) {
  let newValue;
  switch (opperator) {
    case 'divide':
      newValue = this[channel]/value
      break;

    case 'subtract':
      newValue = this[channel] - value
      break;
    default:
    newValue = this[channel] + value
  }
  newValue = Math.min(newValue, 256)
  newValue = Math.max(newValue, 0)
  this[channel] = newValue;
}

Color.prototype.setChannel = function(channel, value) {
  this[channel] = value;
}


module.exports = Color;
