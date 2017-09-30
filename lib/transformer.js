'use strict';

const fs = require('fs');


const transform = module.exports = {}; 

transform.invisible = function(data){
  for(let i = 54; i < 1068; i+=4){
    console.log(data[i]);
  }
};


