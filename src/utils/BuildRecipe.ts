import type Ingredient from "@/types/Ingredient";
import type Recipe from "@/types/Recipe";

class BuildRecipe {
  private id: number;
  private title: string;
  private description: string;
  private duration: number;
  private starSelected: Boolean[];
  private ingredients: Ingredient[];

  build(): Recipe {
    const trueCount = this.starSelected.reduce(
      (count: number, value: Boolean) => {
        if (value === true) {
          return count + 1;
        } else {
          return count;
        }
      },
      0
    );

    const ingredientsFullNames: string[][] = this.ingredients.map(
      (ingredient) => {
        return this.combineIngredientName(ingredient);
      }
    );

    return {
      id: this.id,
      title: this.title,
      difficulty: trueCount,
      description: this.description,
      prepareTime: this.duration,
      ingredients: ingredientsFullNames,
      ImagePath: "",
    };
  }

  private combineIngredientName(ingredient: Ingredient): string[] {
    const ingredientName = ingredient.getName();
    const ingredientAmount = ingredient.getAmount();
    const ingredientUnit = ingredient.getUnit();

    let resultArr: string[] = [];
    resultArr.push(ingredientName);

    if (
      ingredientUnit === "g" ||
      ingredientUnit === "kg" ||
      ingredientUnit === "ml" ||
      ingredientUnit === "l"
    ) {
      resultArr.push(ingredientAmount + ingredientUnit);
    } else {
      resultArr.push(ingredientAmount + " " + ingredientUnit);
    }

    return resultArr;
  }

  constructor(
    id: number,
    title: string,
    description: string,
    duration: number,
    starSelected: Boolean[],
    ingredients: Ingredient[]
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duration = duration;
    this.starSelected = starSelected;
    this.ingredients = ingredients;
  }
}

export default BuildRecipe;
