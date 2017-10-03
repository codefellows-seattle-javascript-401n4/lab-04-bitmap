'use strict';

const pingUser = require('../lib/pingUser.js');
const expect = require('expect');

describe('', () => {
    let responses = '';
    before(function(done){
        pingUser().then(response => responses = response);
        done();
    }); 

    it('', (done) => {
        console.log(responses);
        expect(responses).toEqual('bunch of responses');
    });
});