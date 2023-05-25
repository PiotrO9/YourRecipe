import type Recipe from "@/types/Recipe";
import type Ingredient from "@/types/Ingredient";

class RecipeValidation {
  private ingredients: Ingredient[];
  private title: string;
  private duration: number;

  Validate() {}

  constructor(ingredients: Ingredient[], title: string, duration: number) {
    (this.title = title),
      (this.ingredients = ingredients),
      (this.duration = duration);
  }
}

export default RecipeValidation;
