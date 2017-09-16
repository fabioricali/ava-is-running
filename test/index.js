const {test} = require('ava');
const avaIsRunning = require('../');

test('ava is running, true',t => {
    t.true(avaIsRunning());
});

test('mocha is running, false', t => {
    delete process.env.AVA_PATH;
    t.false(avaIsRunning());
});