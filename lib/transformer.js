'use strict';

const fs = require('fs');


const transformer = module.exports = {}; 

transformer.invisible = function(data){
  for(let i = 54; i < 1068; i+=4){
    console.log(data[i]);
  }
};


