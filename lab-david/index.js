'use strict';

const pingUser = require('./lib/pingUser.js');
const transform = require('./lib/transform.js');

pingUser().then(answer => {
    transform(answer);
});