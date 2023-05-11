import { defineStore } from 'pinia'
import type FavouritesTypes from '@/types/FavouritesTypes'

export const useFavourites = defineStore('Favourites', {
    state: (): FavouritesTypes => ({
        Favourites: []
    }),
    getters: {
        getFavourites(): Array<number> {
            return this.Favourites
        }
    },
    actions: {
        setFavourites(RecipeId: number) {
            this.Favourites.push(RecipeId)
        },
        removeFromFavourites(RecipeId: number) {
            this.Favourites = this.Favourites.filter(id => id != RecipeId)
        }
    }
})