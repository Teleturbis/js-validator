var { blzList } = require('./functions/iban/blzList');

const asArray = Object.entries(blzList.de); // convert object to array

const filtered = asArray.map(([key, value]) => {
  return { key: value };
});

console.log(filtered);
