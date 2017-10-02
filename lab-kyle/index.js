'use strict';

const readFile = require('./lib/read-file.js');
const newBitmap = require('./lib/new-bitmap.js');
const colorShift = require('./lib/color-shift.js');

//Module Syntax:
//readFile(oldImg)

//colorShift(buffer, palStart, palEnd, removeIndex)

//newBitmap(transformFunction, newImgUrl)


newBitmap(colorShift.shift1(readFile('../asset/bitmap.bmp'), 54, 1077, 54), '../asset/colorshift-bitmap.bmp');

newBitmap(colorShift.shift1(readFile('../asset/colorshift-bitmap.bmp'), 54, 1077, 54), '../asset/colorshift-again-bitmap.bmp');

newBitmap(colorShift.shift1(readFile('../asset/finger-print.bmp'), 54, 1077, 54), '../asset/colorshift-finger-print.bmp');
