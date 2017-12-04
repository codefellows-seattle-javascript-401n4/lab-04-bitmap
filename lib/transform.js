'use strict';



const fs = require('fs');
const transform = module.exports = {};

transform.black = function(data){
  for(let i = 50; i < 1000; i++){
    data[i] = 0;
  }
  return data;
};
