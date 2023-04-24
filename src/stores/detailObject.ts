import { defineStore } from 'pinia'
import type RecipeDetailType from '@/types/RecipeDetailType'

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