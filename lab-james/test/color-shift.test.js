'use strict';

const expect = require('expect');
const colorShift = require('../lib/color-shift.js');

describe('colorShift', function(){

  it('colorShift moves buffer index to correct position', function(){

    let testBuffer = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j'];

    expect(colorShift.shift1(testBuffer, 3, 5, 3)).toEqual(['a', 'b', 'c', 'e', 'f', 'd', 'g', 'h', 'i', 'j']);

  });

});
