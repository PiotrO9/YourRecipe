import type Recipe from "@/types/Recipe";
import type Ingredient from "@/types/Ingredient";
import IsFirstLetterUpperCase from "./IsFirstLetterUpperCase";

class RecipeValidation {
  private ingredients: Ingredient[];
  private title: string;
  private duration: number;

  private errorMessages: string[];

  validate(): string[] {
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

    if (this.duration < 5) {
      this.errorMessages.push(
        "Długość wykonywania posiłku musi wynosić conajmniej 5 minut"
      );
    }

    if (this.ingredients.length < 3) {
      this.errorMessages.push(
        "Lista składników musi zawierać minimum 3 elementy"
      );
    } else {
      if (!this.validateIngredients()) {
        this.errorMessages.push("Wprowadź poprawne dane składników");
      }
    }

    return this.errorMessages;
  }

  validateIngredients(): boolean {
    let finalDecision: boolean = true;

    for (let i = 0; i < this.ingredients.length; i++) {
      if (
        this.ingredients[i].getName().length < 3 ||
        this.ingredients[i].getAmount() < 1 ||
        this.ingredients[i].getUnit() === ""
      ) {
        finalDecision = false;
      }
    }

    return finalDecision;
  }

  constructor(ingredients: Ingredient[], title: string, duration: number) {
    (this.title = title),
      (this.ingredients = ingredients),
      (this.duration = duration);
    this.errorMessages = [];
  }
}

export default RecipeValidation;
