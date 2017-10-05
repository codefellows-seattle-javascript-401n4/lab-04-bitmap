const transform = require('../lib/transform.js');
const expect = require('expect');


let userChoices = {transformation: 'greyScale', fileToTransform: 'bitmap', newFilePath: 'transformTest'};

describe('Testing that transformation process works when information is passed into function: ', () => {

    it('It should save a file as expected when all correct information is passed into function', () => {
        expect(transform(userChoices)).toEqual();
    });

    it('should relay a console message saying we did not manage to load a file.', () => {
        let wrongChoices = {transformation: 'greyScale', fileToTransform: 'wrongFile', newFilePath: 'transformTest'};
        expect(transform(wrongChoices)).toEqual();
    });


    it('should relay a console message saying that transformation you typed did not match options', () => {
        let wrongChoices = {transformation: 'wrongScale', fileToTransform: 'bitmap', newFilePath: 'transformTest'};
        expect(transform(wrongChoices)).toEqual();
    });


});