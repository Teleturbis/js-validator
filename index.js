const iban = require('./functions/iban/iban.js');
const isNumeric = require('./functions/characters/numeric/numeric.js');
const isAlphabet = require('./functions/characters/alphabet/alphabet.js');
const isAlphaNumeric = require('./functions/characters/alphanumeric/alphanumeric.js');
const isAlphaPunctuation = require('./functions/characters/alphaPunctuation/alphaPunctuation.js');
const isAlphaNumericPunctuation = require('./functions/characters/alphaNumericPunctuation/alphaNumericPunctuation.js');

function test(val) {
  return val === 'test';
}

module.exports = {
  test,
  iban,
  isNumeric,
  isAlphabet,
  isAlphaNumeric,
  isAlphaPunctuation,
  isAlphaNumericPunctuation,
};
