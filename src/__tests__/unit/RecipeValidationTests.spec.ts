import RecipeValidation from "../../utils/RecipeValidation";
import Ingredient from "../../types/Ingredient";

describe("Validate recipe fiels ", () => {
  test("title is empty, should return array with two title's errors", () => {
    const ingredients = [
      new Ingredient(1, "Pomidor", 100, "g"),
      new Ingredient(1, "Pomidor", 100, "g"),
      new Ingredient(1, "Pomidor", 100, "g"),
    ];
    const recipeValidation = new RecipeValidation(ingredients, "", 100);

    const result = recipeValidation.validate();
    expect(result).toEqual([
      "Wprowadź dane w wymagane pola (pola z gwiazdką)",
      "Nazwa posiłku musi zaczynać się wielką literą oraz musi składać się z minimum 3 liter",
    ]);
  });

  test("title is too short, should return array with one title's error", () => {
    const ingredients = [
      new Ingredient(1, "Pomidor", 100, "g"),
      new Ingredient(1, "Pomidor", 100, "g"),
      new Ingredient(1, "Pomidor", 100, "g"),
    ];

    const recipeValidation = new RecipeValidation(ingredients, "ab", 100);
    const result = recipeValidation.validate();

    expect(result).toEqual([
      "Nazwa posiłku musi zaczynać się wielką literą oraz musi składać się z minimum 3 liter",
    ]);
  });

  test("title is too short, should return array with one title's error", () => {
    const ingredients = [
      new Ingredient(1, "Pomidor", 100, "g"),
      new Ingredient(1, "Pomidor", 100, "g"),
      new Ingredient(1, "Pomidor", 100, "g"),
    ];

    const recipeValidation = new RecipeValidation(ingredients, "zupa", 100);
    const result = recipeValidation.validate();

    expect(result).toEqual([
      "Nazwa posiłku musi zaczynać się wielką literą oraz musi składać się z minimum 3 liter",
    ]);
  });

  test("duration is too small, should return array with one duration's error", () => {
    const ingredients = [
      new Ingredient(1, "Pomidor", 100, "g"),
      new Ingredient(1, "Pomidor", 100, "g"),
      new Ingredient(1, "Pomidor", 100, "g"),
    ];

    const recipeValidation = new RecipeValidation(ingredients, "Zupa", 2);
    const result = recipeValidation.validate();

    expect(result).toEqual([
      "Długość wykonywania posiłku musi wynosić conajmniej 5 minut",
    ]);
  });

  test("ingredients list is empty, should return array with two ingredient's errors", () => {
    const ingredients: Ingredient[] = [];

    const recipeValidation = new RecipeValidation(ingredients, "Zupa", 5);
    const result = recipeValidation.validate();

    expect(result).toEqual([
      "Wprowadź dane w wymagane pola (pola z gwiazdką)",
      "Lista składników musi zawierać minimum 3 elementy",
    ]);
  });

  test("ingredients in list are not complete , should return array with one ingredient's error", () => {
    const ingredients = [
      new Ingredient(1, "", 100, "g"),
      new Ingredient(1, "Pomidor", 100, "g"),
      new Ingredient(1, "", 100, "g"),
    ];

    const recipeValidation = new RecipeValidation(ingredients, "Zupa", 5);
    const result = recipeValidation.validate();

    expect(result).toEqual(["Wprowadź poprawne dane składników"]);
  });
});
