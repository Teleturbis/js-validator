import { Options } from '../../../types/interfaces';

function isAlphaPunctuation(value: string, options: Options) {
  if (options?.space) {
    return /^[a-zA-Z.,;:&%$§"!?()'`´\-\s]+$/.test(value);
  }
  return /^[a-zA-Z.,;:&%$§"!?()'`´\-]+$/.test(value);
}

module.exports = isAlphaPunctuation;
