'use strict';

const expect = require('expect');
const readFile = require('../lib/read-file.js');

describe('read file module', function(){

  it('should read any bitmap file it is given', function(){

    let theFile = readFile('../asset/house.bmp');

    expect(theFile).toEqual(new Buffer([Array]));

  });

});
