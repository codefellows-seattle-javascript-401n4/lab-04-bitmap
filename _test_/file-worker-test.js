'use strict';

const expect = require('expect');
const file = require('./../lib/file-worker.js');

describe('file.read', function(){
  it('should take a filepath and return the contents of it as a buffer', function(){
    let testBuffer = file.read('./asset/house.bmp');
    let expected = Buffer.isBuffer(testBuffer);
    expect(expected).toBe(true);
  });
});