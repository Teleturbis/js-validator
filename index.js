const iban = require('./functions/iban/iban.js');

function test(val) {
  return val === 'test';
}

module.exports = { test, iban };
