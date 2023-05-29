import IsFirstLetterUpperCase from "../../utils/IsFirstLetterUpperCase";

test("Check if first letter is a Big letter, should return true", () => {
  expect(IsFirstLetterUpperCase.validate("Test")).toBe(true);
});

test("Check if first letter is a Big letter, should return false", () => {
  expect(IsFirstLetterUpperCase.validate("test")).toBe(false);
});
