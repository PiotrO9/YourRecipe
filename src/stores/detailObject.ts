import { defineStore } from 'pinia'

type RecipeDetailType = {
    detailRecipe: null | object
} 

export const useDetailObject = defineStore('detailObject', {
    state: (): RecipeDetailType => ({
        detailRecipe: null
    }),
    getters: {
        getRecipeDetail({}) {
            return this.detailRecipe
        }
    },
    actions: {
        setRecipeDetail( obj: object ) {
            this.detailRecipe = obj
        }
    }
})