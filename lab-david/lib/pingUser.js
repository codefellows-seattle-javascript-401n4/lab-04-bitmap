'use strict';
const errorHandler = require('./errorHandler.js');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let getFileName = () => {
    const fileChoices = {1: 'bitmap', 2: 'finger-print', 3: 'house', 4: 'non-palette-bitmap'};
    const choices = {'file': '', 'transformation': '', 'outputName': ''};

    return new Promise((resolve, reject) => {
        readline.question(`
        Hello. Today we are going to do bitmap transforming. Please could you choose while file to transform. Your choices are:
        1. bitmap
        2. finger-print
        3. house
        4. non-palette-bitmap
        
        Please enter either 1, 2, 3 or 4.
        
        `, (answer) => {
                choices['file'] = fileChoices[answer];
                readline.question(`
                    Please choose which transformation you wish to perform:
                    greyScale
                    blacken
                    blueScale
                    invert
                `, (answer) => {
                        choices['transformation'] = answer;
                        readline.question('Please specify the output file name: ', (answer) => {
                            choices['outputName'] = answer;
                            readline.close();
                            resolve(choices);
                        });
                    });

            });    

 
    });

};

module.exports = () => {
    return new Promise((resolve, reject) => {
        getFileName().then((choices, err) => {
            if (err) {
                errorHandler(err);
                reject(err);
            };
            resolve(choices);
        });
    });
    
};
