// 'use strict';

const fileLoader = require('../lib/fileManagement.js');
const expect = require('expect');

describe('File Management Success', () => {
    it('should correctly load a file from file system', () => {
        fileLoader.loadFile('bitmap').then(file => expect(typeof file).toEqual('object'));
    });

    it('should save file correctly if a file is saved and responsd with "File Saved!"', () => {
        fileLoader.loadFile('bitmap').then(file => {
            fileLoader.saveFile(file, 'newFile').then(response => expect(response).toEqual('File Saved!'));
        });
    });

});

describe('File Management Failure', () => {

    it('Should throw error message when a file is not loaded', () => {
        fileLoader.loadFile(null).catch(err => expect(err).toEqual('Did not manage to load a file'));
    });

    it('should say we could not load the file because we did not pass in a file to save', () => {
        fileLoader.loadFile('bitmap').then(file => {
            fileLoader.saveFile(null, 'newFile').catch(err => expect(err).toEqual('Did not manage to save a file'));
        });
    });

});