import { test, expect } from "vitest";

function romanNumerals(number) {
  let result = "";
  if (number >= 10) {
    result += "X";
    number -= 10;
  }
  if (number === 9) return "IX";
  if (number >= 5) {
    result += "V";
    number -= 5;
  }
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
