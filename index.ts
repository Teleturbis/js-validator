var isValidIban = require('./functions/iban/isValidIban');

var isValidMail = require('./functions/mail/mail');

var isNumeric = require('./functions/characters/numeric/numeric');
var isAlphabet = require('./functions/characters/alphabet/alphabet');
var isAlphaNumeric = require('./functions/characters/alphanumeric/alphanumeric');
var isAlphaPunctuation = require('./functions/characters/alphaPunctuation/alphaPunctuation');
var isAlphaNumericPunctuation = require('./functions/characters/alphaNumericPunctuation/alphaNumericPunctuation');

module.exports = {
  isValidIban,
  isNumeric,
  isAlphabet,
  isAlphaNumeric,
  isAlphaPunctuation,
  isAlphaNumericPunctuation,
  isValidMail,
};
