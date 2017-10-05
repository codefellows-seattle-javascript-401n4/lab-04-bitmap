'use strict';

const expect = require('expect');
const newBitmap = require('../lib/new-bitmap.js');
const colorShift = require('../lib/color-shift.js');
const readFile = require('../lib/read-file.js');

describe('new bitmap module', function () {

  it('should create a new bitmap imge after a function has been run on old bitmap', function (){

    let test = newBitmap(colorShift.shift1(readFile('../asset/bitmap.bmp'), 54, 1077, 54), '../lab-kyle/test/test-files/test-colorshift-bitmap.bmp');

    expect(test).toBe('success');

  });

});
