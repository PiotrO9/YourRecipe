import type { Recipe } from "@/types/Recipe";

export default abstract class SearchRecipesByTitle {
  static search(recipes: Recipe[], value: string): Recipe[] {
    if (value === "") {
      return recipes;
    }

    let result: Recipe[] = [];

    result = recipes.filter((obj) =>
      obj.title.toLocaleLowerCase().includes(value)
    );

    return result;
  }
}
