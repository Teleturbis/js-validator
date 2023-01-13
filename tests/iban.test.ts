var { isValidIban } = require('../index');

test('isValidIban for DE', () => {
  expect(isValidIban('DE72 3702 0500 0009 7097 00')).toStrictEqual({
    isValid: true,
    message: 'Iban validated',
    bankInformation: {
      Bankleitzahl: '37020500',
      Merkmal: 1,
      Bezeichnung: 'Bank für Sozialwirtschaft',
      PLZ: '50443',
      Ort: 'Köln',
      Kurzbezeichnung: 'Bank für Sozialwirtschaft',
      PAN: '25011',
      BIC: 'BFSWDE33XXX',
      'Prüfziffer-berechnungs-methode': '09',
      'Datensatz-nummer': '000531',
      'Änderungs-kennzeichen': 'U',
      'Bankleitzahl-löschung': 0,
      'Nachfolge-Bankleitzahl': '00000000',
    },
  });
  expect(isValidIban('DE72370205000009709700')).toStrictEqual({
    isValid: true,
    message: 'Iban validated',
    bankInformation: {
      Bankleitzahl: '37020500',
      Merkmal: 1,
      Bezeichnung: 'Bank für Sozialwirtschaft',
      PLZ: '50443',
      Ort: 'Köln',
      Kurzbezeichnung: 'Bank für Sozialwirtschaft',
      PAN: '25011',
      BIC: 'BFSWDE33XXX',
      'Prüfziffer-berechnungs-methode': '09',
      'Datensatz-nummer': '000531',
      'Änderungs-kennzeichen': 'U',
      'Bankleitzahl-löschung': 0,
      'Nachfolge-Bankleitzahl': '00000000',
    },
  });

  expect(isValidIban('1234567890123')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid',
  });
  expect(isValidIban('1234567890123456')).toStrictEqual({
    isValid: false,
    message: 'Iban format invalid',
  });
  expect(isValidIban('IR12 1234 1234 1234 12')).toStrictEqual({
    isValid: false,
    message: 'Iban locale not supported',
  });
  expect(isValidIban('DE12 3456 7890 1234 5678 9012')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid for DE',
  });
  expect(isValidIban('DE12 3456 7890 1234 5678')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid for DE',
  });
  expect(isValidIban('DE12 3456 7890 1234 5678 90')).toStrictEqual({
    isValid: false,
    message: 'BLZ invalid for DE',
  });
  expect(isValidIban('DE86 3702 0500 0009 7097 00')).toStrictEqual({
    isValid: false,
    message: 'Iban CheckValue invalid',
  });
});

test('isValidIban for AT', () => {
  expect(isValidIban('AT30 6000 0000 9001 2022')).toStrictEqual({
    isValid: true,
    message: 'Iban validated',
    bankInformation: {
      Identnummer: 53767,
      Bankleitzahl: 60000,
      Sektor: 'Aktienbanken',
      Firmenbuchnummer: '205340x',
      Bankenname:
        'BAWAG P.S.K. Bank für Arbeit und Wirtschaft und Österreichische Postsparkasse Aktiengesellschaft',
      Straße: 'Wiedner Gürtel 11',
      PLZ: 1100,
      Ort: 'Wien',
      Bundesland: 'Wien',
      Telefon: 59905,
      Fax: '059905/22840',
      'E-Mail': 'bawagpsk@bawagpsk.com',
      'SWIFT-Code': 'BAWAATWWXXX',
      Homepage: 'https://www.bawag.at/',
      Gründungsdatum: '01/01/1922',
      LEI: '529900ICA8XQYGIKR372',
    },
  });
  expect(isValidIban('AT306000000090012022')).toStrictEqual({
    isValid: true,
    message: 'Iban validated',
    bankInformation: {
      Identnummer: 53767,
      Bankleitzahl: 60000,
      Sektor: 'Aktienbanken',
      Firmenbuchnummer: '205340x',
      Bankenname:
        'BAWAG P.S.K. Bank für Arbeit und Wirtschaft und Österreichische Postsparkasse Aktiengesellschaft',
      Straße: 'Wiedner Gürtel 11',
      PLZ: 1100,
      Ort: 'Wien',
      Bundesland: 'Wien',
      Telefon: 59905,
      Fax: '059905/22840',
      'E-Mail': 'bawagpsk@bawagpsk.com',
      'SWIFT-Code': 'BAWAATWWXXX',
      Homepage: 'https://www.bawag.at/',
      Gründungsdatum: '01/01/1922',
      LEI: '529900ICA8XQYGIKR372',
    },
  });

  expect(isValidIban('1234567890123')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid',
  });
  expect(isValidIban('1234567890123456')).toStrictEqual({
    isValid: false,
    message: 'Iban format invalid',
  });
  expect(isValidIban('IR12 1234 1234 1234 12')).toStrictEqual({
    isValid: false,
    message: 'Iban locale not supported',
  });
  expect(isValidIban('AT12 3456 7890 1234 5678 90')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid for AT',
  });
  expect(isValidIban('AT12 3456 7890 1234 56')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid for AT',
  });
  expect(isValidIban('AT30 0000 0000 9001 2022')).toStrictEqual({
    isValid: false,
    message: 'BLZ invalid for AT',
  });
  expect(isValidIban('AT89 6000 0000 9001 2022')).toStrictEqual({
    isValid: false,
    message: 'Iban CheckValue invalid',
  });
});

test('isValidIban for NL', () => {
  expect(isValidIban('NL30 6000 0000 9001 20')).toStrictEqual({
    bankInformation: undefined,
    isValid: true,
    message: 'Iban validated',
  });
  expect(isValidIban('NL3060000000900120')).toStrictEqual({
    bankInformation: undefined,
    isValid: true,
    message: 'Iban validated',
  });

  expect(isValidIban('1234567890123')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid',
  });
  expect(isValidIban('1234567890123456')).toStrictEqual({
    isValid: false,
    message: 'Iban format invalid',
  });
  expect(isValidIban('IR12 1234 1234 1234 12')).toStrictEqual({
    isValid: false,
    message: 'Iban locale not supported',
  });
  expect(isValidIban('NL12 3456 7890 1234 5678 90')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid for NL',
  });
  expect(isValidIban('NL12 3456 7890 1234')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid for NL',
  });
  expect(isValidIban('NL89 6000 0000 9001 20')).toStrictEqual({
    isValid: false,
    message: 'Iban CheckValue invalid',
  });
});

test('isValidIban for ES', () => {
  expect(isValidIban('ES91 2100 0418 4502 0005 1332')).toStrictEqual({
    bankInformation: undefined,
    isValid: true,
    message: 'Iban validated',
  });
  expect(isValidIban('ES9121000418450200051332')).toStrictEqual({
    bankInformation: undefined,
    isValid: true,
    message: 'Iban validated',
  });

  expect(isValidIban('1234567890123')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid',
  });
  expect(isValidIban('1234567890123456')).toStrictEqual({
    isValid: false,
    message: 'Iban format invalid',
  });
  expect(isValidIban('IR12 1234 1234 1234 12')).toStrictEqual({
    isValid: false,
    message: 'Iban locale not supported',
  });
  expect(isValidIban('ES12 3456 7890 1234 5678 90')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid for ES',
  });
  expect(isValidIban('ES12 3456 7890 1234')).toStrictEqual({
    isValid: false,
    message: 'Iban length invalid for ES',
  });
  expect(isValidIban('ES97 2100 0418 4502 0005 1332')).toStrictEqual({
    isValid: false,
    message: 'Iban CheckValue invalid',
  });
});
