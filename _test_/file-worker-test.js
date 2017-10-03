'use strict';

const expect = require('expect');
const fs = require('fs');
const file = require('./../lib/file-worker.js');

describe('file.read', function(){
  it('should take a filepath and return the contents of it as a buffer', function(){
    let testBuffer = file.read('./asset/house.bmp');
    let expected = Buffer.isBuffer(testBuffer);
    expect(expected).toBe(true);
  });
});

describe('file.read', function(){
  it('should return "null" if the input filepate does not exsit', function(){
    let expected = file.read('./asset/poop.bmp');
    expect(expected).toBe(null);
  });
});

describe('file.write', function() {
  let testPath = './test2.txt';
  if(fs.existsSync(testPath)){
    fs.unlinkSync(testPath);      
  }
  file.write(null, (testPath)); //recreating test file
  it('should create and save a new file based on the given path', function(){
    expect(fs.existsSync(testPath)).toBe(true);
  });
});


