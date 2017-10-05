'use strict';

const transform = require('./lib/transform.js');

let userChoices = {transformation: process.argv[2], fileToTransform: process.argv[3], newFilePath: process.argv[4]};

if ((typeof userChoices['transformation'] === 'undefined') || (typeof userChoices['fileToTransform'] === 'undefined') || (typeof userChoices['newFilePath'] === 'undefined')) {
    console.log(`Please try again. You can choose from:

            Trasnsformations: greyScale, blueScale, invert, blacken
            Files to Transform: bitmap, finger-print, house
            Also enter your chosen name of transformed file.

            Please enter as follows:

            node index.js transformation fileToTransform newfileName
`);
} else {
    transform(userChoices);
}