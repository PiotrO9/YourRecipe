<template>
  <div class="detailView">
    <img class="mainImage" :src=imageFullPath :alt=recipe?.title>
        <h1>{{ recipe?.title }}</h1>
    <div class="RecipeDatas" id="RecipeDatas">

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Transition } from 'vue';
import { useDetailObject } from '@/stores/detailObject';
import type Recipe from '@/types/Recipe';
import CombineFullImagePath from '@/utils/CombineFullImagePath';

export default defineComponent ({
    data(): {recipe: null | Recipe, imageFullPath: undefined | string} {
        return {
            recipe: null,
            imageFullPath: undefined
        }
    },
    computed: {
        detailObject() {
            return useDetailObject()
        }
    },
    mounted() {
        this.recipe = this.detailObject.$state.detailRecipe as Recipe
        this.imageFullPath = CombineFullImagePath(this.recipe.ImagePath)
        
        const tmp: HTMLElement = document.getElementById("RecipeDatas")

        setTimeout(() => {
            tmp.scrollIntoView({behavior: 'smooth'})
        }, 1500);
    }
})
</script>

<style lang="scss">
@import '@/GlobalStyles/variabless.scss';

.detailView {
    position: relative;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    .mainImage {
        width: 100vw;
        height: 100vh;
        aspect-ratio: 16/9;
    }

    h1 {
        position: absolute;
        top: 5rem;
        left: 8rem;
        user-select: none;
        font-size: 8rem;
        color: white;
        font-family: "Sora";
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

        animation: slide-in 2s forwards;
    }

    .RecipeDatas {
        width: 100vw;
        height: 100vh;
        background-color: red;
        padding-top: -10px;
    }

    @keyframes slide-in {
        0% {
            transform: translateY(-10vh);
            opacity: 0.15;
        }
        100% {
            transform: translateY(0px);
            opacity: 1;
        }
    }
}
</style>