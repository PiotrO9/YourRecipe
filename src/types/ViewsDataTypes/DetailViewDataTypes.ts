import type Recipe from "../Recipe";

type DetailViewDataTypes = {
  recipe: null | Recipe;
  imageFullPath: undefined | string;
  prepareTime: string;
};

export default DetailViewDataTypes;
