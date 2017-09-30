'use strict';

const expect = require('expect');
const bp = require('../lib/bitmap.js');
const fs = require('fs');

let path = './test/asset/bitmap.bmp';

describe('bitmap test', () => {
  it('should return 2236671 from the blue function and for \'./asset/bitmap/-red.bmp\' should exist', (done) => {
    bp(path,'blue', (err,result) => {
      if (err) return done(err);
      expect(result).toBe(2236671);
      expect(fs.existsSync('./test/asset/bitmap-blue.bmp')).toBeTruthy();
      done();
    });
  });
  it('should return 2293556 from the green function and for \'./asset/bitmap/-red.bmp\' should exist', (done) => {
    bp(path,'green', (err,result) => {
      if (err) return done(err);
      expect(result).toBe(2293556);
      expect(fs.existsSync('./test/asset/bitmap-green.bmp')).toBeTruthy();
      done();
    });
  });
  it('should return 16719924 from the red function and for \'./asset/bitmap/-red.bmp\' should exist', (done) => {
    bp(path, 'red', (err,result) => {
      if (err) return done(err);
      expect(result).toBe(16719924);
      expect(fs.existsSync('./test/asset/bitmap-red.bmp')).toBeTruthy();
      done();
    });
  });
  it('should return 2565927 from the alpha function and for \'./asset/bitmap/-alpha.bmp\' should exist', (done) => {
    bp(path,'alpha', (err,result) => {
      if (err) return done(err);
      expect(result).toBe(2565927);
      expect(fs.existsSync('./test/asset/bitmap-alpha.bmp')).toBeTruthy();
      done();
    });
  });
});
