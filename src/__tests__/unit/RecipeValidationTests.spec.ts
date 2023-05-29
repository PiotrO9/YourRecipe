import RecipeValidation from "../../utils/RecipeValidation";
import Ingredient from "../../types/Ingredient";

describe("Validate recipe fiels ", () => {
  test("title is empty, should array with two errors about title", () => {
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
});
