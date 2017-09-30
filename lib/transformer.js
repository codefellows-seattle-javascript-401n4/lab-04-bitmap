'use strict';

const fs = require('fs');


const transform = module.exports = {}; 

transform.invisible = function(data){
  for(let i = 56; i < 1068; i+=4){
    data[i] = 1;
  }
  return data;
};