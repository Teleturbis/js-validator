function isAlphaPunctuation(value, options) {
  if (options?.space) {
    return /^[a-zA-Z.,;:&%$§"!?()'`´\-\s]+$/.test(value);
  }
  return /^[a-zA-Z.,;:&%$§"!?()'`´\-]+$/.test(value);
}

module.exports = isAlphaPunctuation;
