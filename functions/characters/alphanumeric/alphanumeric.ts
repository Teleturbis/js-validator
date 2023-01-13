import { Options } from '../../../types/interfaces';

function isAlphaNumeric(str: string, options: Options) {
  if (options?.space) {
    return /^[a-zA-Z0-9.\s]+$/.test(str);
  }
  return /^[a-zA-Z0-9.]+$/.test(str);
}

module.exports = isAlphaNumeric;
