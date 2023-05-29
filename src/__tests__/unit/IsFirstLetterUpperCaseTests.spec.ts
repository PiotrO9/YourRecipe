import IsFirstLetterUpperCase from "../../utils/IsFirstLetterUpperCase";

describe("Check if first letter is a Big letter ", () => {
  test("should return true", () => {
    expect(IsFirstLetterUpperCase.validate("Test")).toBe(true);
  });

  test("should return false", () => {
    expect(IsFirstLetterUpperCase.validate("test")).toBe(false);
  });
});
