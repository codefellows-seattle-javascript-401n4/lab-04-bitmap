'use strict';

const fs = require('fs');


const transform = module.exports = {}; 

transform.black = function(data){
  for(let i = 56; i < 1068; i++){
    data[i] = 0;
  }
  return data;
};