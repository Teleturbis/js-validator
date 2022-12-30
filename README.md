# js-validator

This is a simple Validator, to check Strings for valid Characters. Also you can check an Email and an IBAN.

### How to

Install the Package with
`npm i @teleturbis/js-validator`

Then import the needed Functions into your File, for example:
`import { iban } from '@teleturbis/js-validator'`

#### IBAN

To check an IBAN you have to import the iban-function like that:
`import { isValidIban } from '@teleturbis/js-validator'`

Now you can check the IBAN:
`isValidIban(iban)`

This Function returns an Object. If the IBAN is Valid, the Object will look something like that:
| Key | Type | Value if Valid | Value if invalid |
|--|--| -- | -- |
| isValid | BOOLEAN | true | false |
| message | STRING | Iban validated | 'Iban format invalid' or 'Iban length invalid for [COUNTRY]' or 'BLZ invalid for [COUNTRY]' |
| bankInformation | Object | Bankinformation depending on Country | undefined

All IBANs will be checked for valid length & valid check digit. You can read about that [here](https://www.smart-rechner.de/iban_pruefen/rechner.php).
As addition IBANs for DE & AT will also be checked for valid bank code numbers. There are possibilities for deleted bank code numbers, but those will also be checked.

**Currently we support Bankinformations only for DE and AT.**

    ** Bankinformation for DE - Example **
    Bankleitzahl: '67450048',
    Merkmal: 1,
    Bezeichnung: 'Sparkasse Neckartal-Odenwald',
    PLZ: '74819',
    Ort: 'Mosbach',
    Kurzbezeichnung: 'Spk Neckartal-Odenwald',
    PAN: '56716',
    BIC: 'SOLADES1MOS',
    'Prüfziffer-berechnungs-methode': '00',
    'Datensatz-nummer': '000820',
    'Änderungs-kennzeichen': 'U',
    'Bankleitzahl-löschung': 0,
    'Nachfolge-Bankleitzahl': '00000000'


     ** Bankinformation for AT - Example **
    Kennzeichen: 'Hauptanstalt',
    Identnummer: 7780729,
    Bankleitzahl: 20111,
    Institutsart: 'KI',
    Sektor: 'Sparkassen',
    Firmenbuchnummer: '286283f',
    Bankenname: 'Erste Bank der oesterreichischen Sparkassen AG',
    'Straße': 'Am Belvedere 1',
    PLZ: 1100,
    Ort: 'Wien',
    Bundesland: 'Wien',
    Telefon: '050100/10100',
    Fax: '050100/910100',
    'E-Mail': 'service@s-servicecenter.at',
    'SWIFT-Code': 'GIBAATWWXXX',
    Homepage: 'www.erstebank.at',
    'Gründungsdatum': '11/08/2006',
    LEI: '549300HUKIA1IZQHFZ83'

In future, there will come more Countries.

#### Email

To check an Email you have to import the isValidMail-function like that:
`import { isValidMail} from '@teleturbis/js-validator'`

Now you can check the IBAN:
`isValidMail(mail)`

This Function returns an Object:
| Key | Type | Value if Valid | Value if invalid |
|--|--| -- | -- |
| isValid | BOOLEAN | true | false |
| message | STRING | 'Email is valid!' | 'Email is invalid!' |

#### String-Checks

Each of the following Functions can take an Object as second Argument. This will then look like that: `isNumeric('123 456', { space: true })`
If space is true, spaces inside the String are Valid (e.g. "123 456" & "123456" are valid), else spaces are forbidden (e.g. "123 456" will return false while "123456" will be true).

| Function                  | Example                             | Options            | Return  | Allowed Chars                       |
| ------------------------- | ----------------------------------- | ------------------ | ------- | ----------------------------------- |
| isNumeric                 | isNumeric('12.3')                   | { space: BOOLEAN } | BOOLEAN | 0-9                                 |
| isAlphabet                | isAlphabet("Anton")                 | { space: BOOLEAN } | BOOLEAN | A-Z & a-z                           |
| isAlphaNumeric            | isAlphaNumeric("Anton12.3")         | { space: BOOLEAN } | BOOLEAN | A-Z & a-z & 0-9                     |
| isAlphaPunctuation        | isAlphaNumeric("Anton&Michael")     | { space: BOOLEAN } | BOOLEAN | A-Z & a-z & .,;:&%$§"!?()'`´-       |
| isAlphaNumericPunctuation | isAlphaNumeric("Anton&Michael12.3") | { space: BOOLEAN } | BOOLEAN | A-Z & a-z & 0-9 & .,;:&%$§"!?()'`´- |
