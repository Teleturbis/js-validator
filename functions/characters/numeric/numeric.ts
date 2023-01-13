export interface Options {
  space?: boolean;
}

function isNumeric(value: string, options?: Options): boolean {
  if (options?.space) {
    return /^[0-9.\s]+$/.test(value);
  }
  return /^[0-9.]+$/.test(value);
}

module.exports = isNumeric;
