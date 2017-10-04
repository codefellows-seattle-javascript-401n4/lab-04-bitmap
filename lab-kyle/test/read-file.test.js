'use strict';

const expect = require('expect');
const readFile = require('../lib/read-file.js');

describe('read file module', function(){

  it('should read any bitmap file it is given', function(){

    var theFile = readFile('../asset/house.bmp');

    expect(theFile).toBe(new Buffer([Array]));

  });

});
