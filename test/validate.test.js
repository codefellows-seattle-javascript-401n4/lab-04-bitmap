'use strict';



const validate = require('../lib/validate.js');
const expect = require('expect');

let baseArgs = ['/usr/local/Cellar/node/7.7.4/bin/node',
  '/Users/paulamookerjee/Code_Fellows/lab-04-bitmap/lab-paula/lab-04-bitmap/index.js'];
const opts = ['invert', 'randomize', 'grayscale', 'blueify', 'redify', 'greenify'];



describe('Validate', function(){
  it('should fail if only "node index.js" is entered', function(done) {
    let args = baseArgs;
    expect(validate(args, opts)).toEqual(false);
    done();
  });


  it('should fail if an incorrect transform option is used', function(done) {
    let args = baseArgs.concat('bitmap.bmp','newbitmap.bmp', 'pickles');
    expect(validate(args, opts)).toEqual(false);
    done();
  });


  it('should not fail if correct inputs', function(done) {
    let args = baseArgs.concat('bitmap.bmp','newbitmap.bmp', 'invert');
    expect(validate(args, opts)).toEqual(true);
    done();
  });


  it('should fail if non-bitmap input', function(done) {
    let args = baseArgs.concat('bitmap.jpg','newbitmap.bmp', 'invert');
    expect(validate(args, opts)).toEqual(false);
    done();
  });


  it('should fail if a non-bitmap output', function(done) {
    let args = baseArgs.concat('bitmap.bmp','newbitmap.jpg', 'invert');
    expect(validate(args, opts)).toEqual(false);
    done();
  });
});
