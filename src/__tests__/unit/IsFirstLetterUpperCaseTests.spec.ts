import IsFirstLetterUpperCase from "../../utils/IsFirstLetterUpperCase";
import { expect, test } from "@jest/globals";

describe("Check if first letter is a Big letter ", () => {
  test("should return true", () => {
    expect(IsFirstLetterUpperCase.validate("Test")).toBe(true);
  });

  test("should return false", () => {
    expect(IsFirstLetterUpperCase.validate("test")).toBe(false);
  });
});
