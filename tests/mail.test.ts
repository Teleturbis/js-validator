var { isValidMail } = require('../index');

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
