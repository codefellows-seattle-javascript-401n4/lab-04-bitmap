'use strict';

const expect = require('expect');
const writeFile = require('../lib/write-file.js');
const readFile = require('../lib/read-file.js');

describe('write file module', function(){

  it('should create a new bitmap file after a function has been run on it.', function() {

    let newFile = writeFile('../test-files/test-one.txt');

    expect(newFile).toBe('');

  });

});
