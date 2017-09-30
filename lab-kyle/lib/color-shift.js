'use strict';

const colorShift = module.exports = {};

colorShift.shift1 = function (array, remove, insert){

  let newArray = array;
  let value = array[remove];

  newArray.splice(remove, 1);
  newArray.splice(insert, 0, value);

  return newArray;
};
