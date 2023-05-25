import type Ingredient from "../Ingredient";

export type AddingRecipeViewDataType = {
  Ingredients: Ingredient[];
  StarsSelected: Boolean[];
  Title: string;
  Duration: number;
  Description: string;
  IsError: boolean;
  ErrorList: string[];
};
