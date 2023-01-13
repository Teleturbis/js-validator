export interface Options {
  space?: boolean;
}

export interface MessageObject {
  isValid: boolean;
  message: string;
  bankInformation?: any;
}

export interface AlphaToNum {
  [key: string]: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
  h: string;
  i: string;
  j: string;
  k: string;
  l: string;
  m: string;
  n: string;
  o: string;
  p: string;
  q: string;
  r: string;
  s: string;
  t: string;
  u: string;
  v: string;
  w: string;
  x: string;
  y: string;
  z: string;
}

export interface EmailObject {
  isValid: boolean;
  message: string;
}

export interface BlzDe {
  Bankleitzahl: string;
  Merkmal: string | number;
  Bezeichnung: string;
  PLZ: string;
  Ort: string;
  Kurzbezeichnung: string;
  PAN?: string;
  BIC?: string;
  'Prüfziffer-berechnungs-methode': string;
  'Datensatz-nummer': string;
  'Änderungs-kennzeichen': string;
  'Bankleitzahl-löschung': string | number;
  'Nachfolge-Bankleitzahl': string;
}

export interface BlzAt {
  Kennzeichen?: string;
  Identnummer: number;
  Bankleitzahl: number;
  Sektor?: string;
  Firmenbuchnummer: string;
  Bankenname: string;
  Straße: string;
  PLZ: number;
  Ort: string;
  'Postadresse / PLZ'?: string | number;
  'Postadresse / Ort'?: string;
  'Postadresse / Straße'?: string;
  Institutsart?: string;
  Postfach?: number;
  Bundesland: string;
  Telefon?: string | number;
  Fax?: string | number;
  'E-Mail'?: string;
  'SWIFT-Code'?: string;
  Homepage?: string;
  Gründungsdatum?: string;
  LEI?: string;
}

export interface Blz {
  de: BlzDe[];
  at: BlzAt[];
}
