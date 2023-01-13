var isValidIban = require('./functions/iban/isValidIban.js');

var isValidMail = require('./functions/mail/mail.js');

var isNumeric = require('./functions/characters/numeric/numeric.js');
var isAlphabet = require('./functions/characters/alphabet/alphabet.js');
var isAlphaNumeric = require('./functions/characters/alphanumeric/alphanumeric.js');
var isAlphaPunctuation = require('./functions/characters/alphaPunctuation/alphaPunctuation.js');
var isAlphaNumericPunctuation = require('./functions/characters/alphaNumericPunctuation/alphaNumericPunctuation.js');

module.exports = {
  isValidIban,
  isNumeric,
  isAlphabet,
  isAlphaNumeric,
  isAlphaPunctuation,
  isAlphaNumericPunctuation,
  isValidMail,
};
