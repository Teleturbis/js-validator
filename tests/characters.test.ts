var {
  isNumeric,
  isAlphabet,
  isAlphaNumeric,
  isAlphaPunctuation,
  isAlphaNumericPunctuation,
  isValidMail,
} = require('../index');

test('isAlphabet without space', () => {
  expect(isAlphabet('abcABC')).toBe(true);

  expect(isAlphabet('abc123')).toBe(false);
  expect(isAlphabet('abc123!')).toBe(false);
});

test('isAlphabet with space', () => {
  expect(isAlphabet('abc ABC', { space: true })).toBe(true);

  expect(isAlphabet('abc123', { space: true })).toBe(false);
  expect(isAlphabet('abc123!', { space: true })).toBe(false);
});

test('isAlphabet with punctuation', () => {
  expect(isAlphaPunctuation('abc.')).toBe(true);

  expect(isAlphaPunctuation('abc123')).toBe(false);
  expect(isAlphaPunctuation('abc123!')).toBe(false);
});

test('isAlphabet with space and punctuation', () => {
  expect(isAlphaPunctuation('abc .', { space: true })).toBe(true);

  expect(isAlphaPunctuation('abc123', { space: true })).toBe(false);
  expect(isAlphaPunctuation('abc123!', { space: true })).toBe(false);
});

test('isAlphaNumeric without space', () => {
  expect(isAlphaNumeric('abc123')).toBe(true);

  expect(isAlphaNumeric('abc123!')).toBe(false);
});

test('isAlphaNumeric with space', () => {
  expect(isAlphaNumeric('abc 123', { space: true })).toBe(true);

  expect(isAlphaNumeric('abc 123!', { space: true })).toBe(false);
});

test('isAlphaNumeric with punctuation', () => {
  expect(isAlphaNumericPunctuation('abc123')).toBe(true);

  expect(isAlphaNumericPunctuation('abc123{')).toBe(false);
});

test('isAlphaNumeric with space and punctuation', () => {
  expect(isAlphaNumericPunctuation('abc 123', { space: true })).toBe(true);

  expect(isAlphaNumericPunctuation('abc 123{', { space: true })).toBe(false);
});

test('isNumeric', () => {
  expect(isNumeric('123')).toBe(true);
  expect(isNumeric('123.')).toBe(true);
  expect(isNumeric('123.4')).toBe(true);
  expect(isNumeric('123.4.5')).toBe(true);

  expect(isNumeric('123.4.5A')).toBe(false);
});

test('isNumeric with space', () => {
  expect(isNumeric('12 3', { space: true })).toBe(true);
  expect(isNumeric('12 3.', { space: true })).toBe(true);
  expect(isNumeric('12 3.4', { space: true })).toBe(true);
  expect(isNumeric('12 3.4.5', { space: true })).toBe(true);

  expect(isNumeric('12 3.4.5 A', { space: true })).toBe(false);
});

test('isValidMail', () => {
  expect(isValidMail('hans@me.de')).toStrictEqual({
    isValid: true,
    message: 'Email is valid!',
  });
  expect(isValidMail('me@myName.com')).toStrictEqual({
    isValid: true,
    message: 'Email is valid!',
  });
  expect(isValidMail('ali@ali-express.ninja')).toStrictEqual({
    isValid: true,
    message: 'Email is valid!',
  });
  expect(isValidMail('q@q.de')).toStrictEqual({
    isValid: true,
    message: 'Email is valid!',
  });

  expect(isValidMail('me@me@me.de')).toStrictEqual({
    isValid: false,
    message: 'Email is invalid!',
  });
  expect(isValidMail('me%@me.de')).toStrictEqual({
    isValid: false,
    message: 'Email is invalid!',
  });
  expect(isValidMail('me@d.e')).toStrictEqual({
    isValid: false,
    message: 'Email is invalid!',
  });
  expect(isValidMail('@.de')).toStrictEqual({
    isValid: false,
    message: 'Email is invalid!',
  });
});
