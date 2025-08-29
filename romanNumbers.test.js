import { test, expect } from "vitest";

function romanNumerals(number) {
  function convertDigit(digit, digitValue) {
    while (number >= digitValue) {
      result += digit;
      number -= digitValue;
    }
  }
  let result = "";

  convertDigit("C", 100);
  convertDigit("L", 50);
  convertDigit("X", 10);
  convertDigit("IX", 9);
  convertDigit("V", 5);
  if (number === 4) return "IV";

  for (let i = 0; i < number; i++) {
    result += "I";
  }
  return result;
}
function testRomanNumerals(number, expected) {
  test(`${number} should be ${expected}`, () => {
    expect(romanNumerals(number)).toBe(expected);
  });
}
testRomanNumerals(1, "I");
testRomanNumerals(2, "II");
testRomanNumerals(3, "III");
testRomanNumerals(4, "IV");
testRomanNumerals(5, "V");
testRomanNumerals(6, "VI");
testRomanNumerals(9, "IX");
testRomanNumerals(10, "X");
testRomanNumerals(12, "XII");
testRomanNumerals(15, "XV");
testRomanNumerals(18, "XVIII");
testRomanNumerals(19, "XIX");
testRomanNumerals(20, "XX");
testRomanNumerals(23, "XXIII");
testRomanNumerals(38, "XXXVIII");
testRomanNumerals(45, "XXXXV");
testRomanNumerals(355, "CCCLV");
