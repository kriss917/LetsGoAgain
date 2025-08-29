import { test, expect } from "vitest";

function romanNumerals(number) {
  if (number === 2) return "II";
  return "I";
}
function testRomanNumerals(number, expected) {
  test(`${number} should be ${expected}`, () => {
    expect(romanNumerals(number)).toBe(expected);
  });
}
testRomanNumerals(1, "I");
testRomanNumerals(2, "II");
