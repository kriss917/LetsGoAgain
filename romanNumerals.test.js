import { test, expect } from "vitest";

function romanNumerals(number) {
  if (number === 2) {
    return "II";
  }
  return "I";
}

test("dette er det testen ", () => {
  expect(romanNumerals(1)).toBe("I");
});
test("dette er det testen heter på en måte", () => {
  expect(romanNumerals(2)).toBe("II");
});
