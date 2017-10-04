'use strict';

const expect = require('expect');
const invert = require('../lib/invert.js');

describe('invert function', function (){

  it('should return a new array that has the new pallete after being inverted', function() {

    let bufArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let testBuffer = new Buffer(bufArray);

    expect(invert(testBuffer, 3, 5)).toEqual(new Buffer([1, 2, 3, 251, 250, 249, 7, 8, 9, 10]));

  });

});
