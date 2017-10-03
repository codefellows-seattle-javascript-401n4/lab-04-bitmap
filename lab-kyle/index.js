'use strict';

const readFile = require('./lib/read-file.js');
const newBitmap = require('./lib/new-bitmap.js');
const colorShift = require('./lib/color-shift.js');
const invert = require('./lib/invert.js');

//Module Syntax:
//readFile(oldImg)

//colorShift(buffer, palStart, palEnd, removeIndex)

//newBitmap(transformFunction, newImgUrl)

//COLOR SHIFT
// newBitmap(colorShift.shift1(readFile('../asset/bitmap.bmp'), 54, 1077, 54), '../asset/colorshift-bitmap.bmp');
//
// newBitmap(colorShift.shift1(readFile('../asset/colorshift-bitmap.bmp'), 54, 1077, 54), '../asset/colorshift-again-bitmap.bmp');
//
// newBitmap(colorShift.shift1(readFile('../asset/finger-print.bmp'), 54, 1077, 54), '../asset/colorshift-finger-print.bmp');


//INVERT
newBitmap(invert(readFile('../asset/bitmap.bmp'), 54, 1077), '../asset/invert-bitmap.bmp');
