const blzList = require('./blz');
const alphaToNum = require('./alphaToNum');
const Big = require('big.js');

function iban(val) {
  const regex = /^[a-z]+[a-z]+[\d]+/gm;

  val = val.toLowerCase().replace(/\s/g, ''); // remove spaces

  if (val.length < 15 || val.length > 34)
    return { isValid: false, message: 'Iban length invalid' }; // IBAN length

  if (!val.match(regex))
    return { isValid: false, message: 'Iban format invalid' }; // IBAN format

  const locale = val.substring(0, 2); // get locale
  if (!['nl', 'at', 'ch', 'de', 'es'].includes(locale))
    return { isValid: false, message: 'Iban locale not supported' }; // check if locale is valid

  let blz;
  let bankInformation;

  switch (locale) {
    case 'nl':
      blz = val.substring(4, 8);
      break;

    case 'at':
      blz = val.substring(4, 9);
      break;

    case 'ch':
      blz = val.substring(4, 9);
      break;

    case 'de':
      blz = val.substring(4, 12);
      break;

    case 'es':
      blz = val.substring(4, 8);
      break;

    default:
      return { isValid: false, message: 'Iban locale not supported' };
  }

  if (locale === 'de') {
    if (val.length !== 22)
      return { isValid: false, message: 'Iban length invalid for DE' }; // check if IBAN length is valid (DE)

    const asArray = Object.entries(blzList.de); // convert object to array
    if (
      !asArray.filter(
        ([key, value]) =>
          (value.Bankleitzahl && value.Bankleitzahl === blz) ||
          (value['Nachfolge-Bankleitzahl'] &&
            value['Nachfolge-Bankleitzahl'] === blz)
      ).length > 0
    )
      return { isValid: false, message: 'BLZ invalid for DE' }; // check if BLZ is valid

    bankInformation = asArray.filter(([key, value]) => {
      if (
        (value.Bankleitzahl && value.Bankleitzahl === blz) ||
        (value['Nachfolge-Bankleitzahl'] &&
          value['Nachfolge-Bankleitzahl'] === blz)
      ) {
        return value;
      }
    })[0][1];
  }

  if (locale === 'nl') {
    if (val.length !== 18)
      return { isValid: false, message: 'Iban length invalid for NL' }; // check if IBAN length is valid (NL)
  }

  if (locale === 'at') {
    if (val.length !== 20)
      return { isValid: false, message: 'Iban length invalid for AT' }; // check if IBAN length is valid (AT)

    const asArray = Object.entries(blzList.at); // convert object to array
    if (
      !asArray.filter(
        ([key, value]) => value.Bankleitzahl && value.Bankleitzahl + '' === blz
      ).length > 0
    )
      return { isValid: false, message: 'BLZ invalid for AT' }; // check if BLZ is valid
  }

  if (locale === 'ch') {
    if (val.length !== 21)
      return { isValid: false, message: 'Iban length invalid for CH' }; // check if IBAN length is valid (CH)
  }

  if (locale === 'es') {
    if (val.length !== 24)
      return { isValid: false, message: 'Iban length invalid for ES' }; // check if IBAN length is valid (ES)
  }

  const bankCode = val.substring(0, 2); // get bank code
  const checkValue = val.substring(2, 4); // get check value
  const bankNum = new Big(val.substring(4) + alphaToNum(bankCode)); // get bank number

  let big = new Big(98 - bankNum.times(100).mod(97)).c; // calculate check value

  const check = `${big[0]}${big[1]}`; // convert check value to string

  if (!check == checkValue)
    return { isValid: false, message: 'Iban CheckValue invalid' }; // check if check value is valid

  return { isValid: true, message: 'Iban validated', bankInformation };
}

module.exports = iban;
