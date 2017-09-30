'use strict';

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

const potentialChoices = {1: 'bitmap', 2: 'finger-print', 3: 'house', 4: 'non-palette-bitmap'};

let getFileName = () => {
    return new Promise((resolve) => {
        readline.question(`
        Hello. Today we are going to do bitmap transforming. Please could you choose while file to transform. Your choices are:
        1. bitmap
        2. finger-print
        3. house
        4. non-palette-bitmap

        Please enter either 1, 2, 3 or 4.

        `, (answer) => {
            resolve(answer);
            readline.close();
        });
    });
};

module.exports = () => {
    return choices;

};
