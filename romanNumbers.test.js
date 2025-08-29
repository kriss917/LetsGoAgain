import { test, expect } from "vitest";

function romanNumerals(number) {
  function convertDigit(digit, digitValue) {
    while (number >= digitValue) {
      result += digit;
      number -= digitValue;
    }
  }
  let result = "";

  convertDigit("CM", 900);
  convertDigit("C", 100);
  convertDigit("XC", 90);
  convertDigit("L", 50);
  convertDigit("X", 10);
  convertDigit("IX", 9);
  convertDigit("V", 5);
  convertDigit("IV", 4);
  convertDigit("I", 1);

  return result;
}
function testRomanNumerals(number, expected) {
  test(`${number} should be ${expected}`, () => {
    expect(romanNumerals(number)).toBe(expected);
  });
}
testRomanNumerals(1, "I");
testRomanNumerals(3, "III");
testRomanNumerals(4, "IV");
testRomanNumerals(6, "VI");
testRomanNumerals(9, "IX");
testRomanNumerals(10, "X");
testRomanNumerals(12, "XII");
testRomanNumerals(18, "XVIII");
testRomanNumerals(19, "XIX");
testRomanNumerals(20, "XX");
testRomanNumerals(23, "XXIII");
testRomanNumerals(38, "XXXVIII");
testRomanNumerals(355, "CCCLV");
testRomanNumerals(999, "CMXCIX");
