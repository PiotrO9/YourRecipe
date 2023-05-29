import type { Recipe } from "../Recipe";

interface HomeViewDataTypes {
  recipes: null | Array<Recipe>;
  searchInputValue: string;
}

export default HomeViewDataTypes;
