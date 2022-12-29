const values = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
  g: 16,
  h: 17,
  i: 18,
  j: 19,
  k: 20,
  l: 21,
  m: 22,
  n: 23,
  o: 24,
  p: 25,
  q: 26,
  r: 27,
  s: 28,
  t: 29,
  u: 30,
  v: 31,
  w: 32,
  x: 33,
  y: 34,
  z: 35,
};

function alphaToNum(val) {
  if (typeof val === 'string' && val.length === 2) {
    return parseInt(`${values[val[0]]}${values[val[1]]}`);
  } else {
    return 0000;
  }
}

module.exports = alphaToNum;
