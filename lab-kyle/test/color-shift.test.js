'use strict';

const expect = require('expect');
const colorShift = require('../lib/color-shift.js');

describe('colorShift function', function (){

  it('should take an indice and move it somewhere else in the buffer array', function(){

    let testbuffer = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

    expect(colorShift.shift1(testbuffer, 3, 5, 3)).toEqual(['a', 'b', 'c', 'e', 'f', 'd', 'g', 'h', 'i', 'j']);
    
  });

});
