import type Recipe from "../Recipe"

interface IRecipesGrid {
    recipes: null | Array<Recipe>,
    path: string
}

export default IRecipesGrid