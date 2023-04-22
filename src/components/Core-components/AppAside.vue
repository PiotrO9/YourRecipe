<template>
    <aside>
        <p @click="AllRecipesClick">Wszystkie przepisy</p>
        <p @click="FavouriteRecipesClick">Ulubione</p>
        <p @click="AddRecipeClick">Dodaj przepis</p>
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    methods: {
        AllRecipesClick(): void {
            console.log("All recipes")
        },
        FavouriteRecipesClick(): void {
            console.log("Favourite recipes")
        },
        AddRecipeClick(): void {
            console.log("Add recipe")
        }
    }
})
</script>

<style lang="scss">
@import '../../GlobalStyles/variabless.scss';

    aside {
        width: 20%;
        height: 95%;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        flex-direction: column;
        background-color: white;
        border-radius: $ComponentBorderRadius;
        margin-top: 20px;
        padding-top: 30px;
        gap: 2rem;

        p {
            font-family: "Sora";
            font-size: 2rem;
            font-weight: bold;
            text-align: center;
            cursor: pointer;
         }
    }
</style>