'use strict';

const expect = require('expect');
const fs = require('fs');

const transformerBluer = require('../lib/transformers/bluer');
const transformerDarker = require('../lib/transformers/darker');
const transformerRedder = require('../lib/transformers/redder');
const transformerGreener = require('../lib/transformers/greener');


describe('testing bluer function', function(){
  it('should throw an error with the wrong buffer', () => {
    expect(() => {
      transformerBluer('invalid buffer');

    }).toThrow();
  });

  it('should transform the bitmap bluer', () => {
    let oldBitmap = fs.readFileSync('./asset/bitmap.bmp');
    let transformedBitmap = function() {
      const bitmapBuffer = fs.readFileSync('./asset/bitmap.bmp');
      const transformedBitmap = transformerBluer(bitmapBuffer);
      return transformedBitmap;
    }();
    expect(oldBitmap).not.toEqual(transformedBitmap);
  });
});

describe('testing darker transformer', () => {
  it('should transform the bitmap darker', () => {
    let oldBitmap = fs.readFileSync('./asset/bitmap.bmp');
    let transformedBitmap = function() {
      const bitmapBuffer = fs.readFileSync('./asset/bitmap.bmp');
      const transformedBitmap = transformerDarker(bitmapBuffer);
      return transformedBitmap;
    }();
    expect(oldBitmap).not.toEqual(transformedBitmap);
  });
});

describe('testing redder transformer', () => {
  it('should transform the bitmap redder', () => {
    let oldBitmap = fs.readFileSync('./asset/bitmap.bmp');
    let transformedBitmap = function() {
      const bitmapBuffer = fs.readFileSync('./asset/bitmap.bmp');
      const transformedBitmap = transformerRedder(bitmapBuffer);
      return transformedBitmap;
    }();
    expect(oldBitmap).not.toEqual(transformedBitmap);
  });
});

describe('testing greener transformer', () => {
  it('should transform the bitmap greener', () => {
    let oldBitmap = fs.readFileSync('./asset/bitmap.bmp');
    let transformedBitmap = function() {
      const bitmapBuffer = fs.readFileSync('./asset/bitmap.bmp');
      const transformedBitmap = transformerGreener(bitmapBuffer);
      return transformedBitmap;
    }();
    expect(oldBitmap).not.toEqual(transformedBitmap);
  });
});
