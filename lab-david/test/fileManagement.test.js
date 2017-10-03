// 'use strict';

// const pingUser = require('../lib/fileManagement.js');
// const expect = require('expect');

// describe('File Management Success', () => {
//     let loadedFile = '';
//     before(function(done){
//         pingUser.loadFile('bitmap').then(file => {
//             loadedFile = file;
//             done();
//         }); 
//     });

//     it('should return', (done) => {
//         let typeOf = typeof loadedFile;
//         expect(typeOf).toEqual('object');
//     });
// });

// describe('File Management Failure', () => {
//     let loadedFile = '';
//     before(function(done){
//         pingUser.loadFile().then(file => {
//             loadedFile = file;
//             done();
//         }); 
//     });

//     it('should return', (done) => {
//         console.log(loadedFile);
//     });
// });