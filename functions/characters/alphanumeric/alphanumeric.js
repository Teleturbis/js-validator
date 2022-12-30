function isAlphaNumeric(str, options) {
  if (options?.space) {
    return /^[a-zA-Z0-9.\s]+$/.test(str);
  }
  return /^[a-zA-Z0-9.]+$/.test(str);
}

module.exports = isAlphaNumeric;
