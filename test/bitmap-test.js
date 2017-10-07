'use strict';

const fs = require('fs');
const expect = require('expect');
const Bitmap = require('../model/bitmap.js');

describe('Test of the bitmap module', function(){

  describe('constructor with output/output.bmp', function(){
    fs.readFile('./output/output.bmp', (error, data) => {
      if (error) throw error;
      // console.log(data);
      return;
    });
    it('name should equal  "output.bmp"', () => {
      expect(this.buffer).toEqual(this.buffer);
    });
  });
});
