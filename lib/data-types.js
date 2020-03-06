const Types = {
  BOOL: 0xc1,
  SINT: 0xc2,
  INT: 0xc3,
  DINT: 0xc4,
  LINT: 0xc5,
  USINT: 0xc6,
  UINT: 0xc7,
  UDINT: 0xc8,
  REAL: 0xca,
  LREAL: 0xcb,
  STIME: 0xcc,
  DATE: 0xcd,
  TIME_AND_DAY: 0xce,
  DATE_AND_STRING: 0xcf,
  STRING: 0xd0,
  WORD: 0xd1,
  DWORD: 0xd2,
  BIT_STRING: 0xd3,
  LWORD: 0xd4,
  STRING2: 0xd5,
  FTIME: 0xd6,
  LTIME: 0xd7,
  ITIME: 0xd8,
  STRINGN: 0xd9,
  SHORT_STRING: 0xda,
  TIME: 0xdb,
  EPATH: 0xdc,
  ENGUNIT: 0xdd,
  STRINGI: 0xde,
  STRUCT: 0x02a0,
};

// Map for lookup-by-value
const _byValue = new Map();
for (const [k, v] of Object.entries(Types)) _byValue.set(v, k);

/**
 * Checks if an Inputted Integer is a Valid Type Code (Vol1 Appendix C)
 *
 * @param {number} num - Integer to be Tested
 * @returns {boolean}
 */
function isValidTypeCode (num) {
  return _byValue.has(num);
}

/**
 * Retrieves Human Readable Version of an Inputted Type Code
 *
 * @param {number} num - Type Code to Request Human Readable version
 * @returns {string} Type Code String Interpretation
 */
function getTypeCodeString(num) {
  return _byValue.get(num) || null;
}

module.exports = { Types, isValidTypeCode, getTypeCodeString };