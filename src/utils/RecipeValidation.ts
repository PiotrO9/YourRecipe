import type Recipe from "@/types/Recipe";
import type Ingredient from "@/types/Ingredient";
import IsFirstLetterUpperCase from "./IsFirstLetterUpperCase";

class RecipeValidation {
  private ingredients: Ingredient[];
  private title: string;
  private duration: number;

  private errorMessages: string[];

  Validate(): string[] {
    if (
      this.title === "" ||
      this.duration === 0 ||
      this.ingredients.length == 0
    ) {
      this.errorMessages.push(
        "Wprowadź dane w wymagane pola (pola z gwiazdką)"
      );
    }

    if (!IsFirstLetterUpperCase.validate(this.title) || this.title.length < 3) {
      this.errorMessages.push(
        "Nazwa posiłku musi zaczynać się wielką literą oraz musi składać się z minimum 3 liter"
      );
    }

    return this.errorMessages;
  }

  constructor(ingredients: Ingredient[], title: string, duration: number) {
    (this.title = title),
      (this.ingredients = ingredients),
      (this.duration = duration);
    this.errorMessages = [];
  }
}

export default RecipeValidation;
