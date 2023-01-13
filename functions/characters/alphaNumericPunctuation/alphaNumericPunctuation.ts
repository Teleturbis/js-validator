import { Options } from '../../../types/interfaces';

function isAlphaNumericPunctuation(value: string, options: Options) {
  if (options?.space) {
    return /^[a-zA-Z.,;:&%$§@€/"!?()'`´0-9\-\s]+$/.test(value);
  }
  return /^[a-zA-Z.,;:&%$§@€"/!?()'`´0-9\-]+$/.test(value);
}

module.exports = isAlphaNumericPunctuation;
