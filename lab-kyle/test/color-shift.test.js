'use strict';

const expect = require('expect');
const colorShift = require('../lib/color-shift.js');

describe('colorShift function', function (){

  it('should take an indice and move it somewhere else in the buffer array', function(){

    let bufArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let testBuffer = new Buffer(bufArray);

    //colorShift.shift1 = function (buffer, palStart, palEnd, removeIndex)

    expect(colorShift.shift1(testBuffer, 3, 5, 3)).toEqual(new Buffer([1, 2, 3, 5, 6, 4, 7, 8, 9, 10]));

  });

});
