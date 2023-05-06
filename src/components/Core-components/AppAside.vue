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
        height: 95%;
        width: 20%;
        display: flex;
        justify-content: flex-start;
        align-content: center;
        flex-direction: column;
        margin-top: 20px;
        padding-top: 30px;
        gap: 2rem;
        background-color: white;
        border-radius: $ComponentBorderRadius;

        p {
            text-align: center;
            font-family: "Sora";
            font-size: 2rem;
            font-weight: bold;
            cursor: pointer;
         }
    }
</style>