<template>
  <div class="detailView">
    <img class="mainImage" :src=imageFullPath :alt=recipe?.title>
        <h1>{{ recipe?.title }}</h1>
    <div class="RecipeDatas" id="RecipeDatas">
        <div class="RecipeDatas__content">
            <p>{{ recipe?.title }}</p>
            <hr>
            <div class="RecipeDatas__content--info">
                <section class="left">
                    <p>{{ recipe?.description }}</p>
                    <p>Czas przygotowania: {{ recipe?.prepareTime }}</p>
                    <div>
                        <p>Trudność: </p>
                        <fa v-for="i in recipe?.difficulty" :key="i" icon="fa-solid fa-star" />
                    </div>
                </section>
                <section class="right">
                    
                </section>
            </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
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
    background-color: $CremeBackground;

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
        background-color: $CremeBackground;
        padding-top: -10px;
        display: flex;
        align-content: center;
        justify-content: center;

        &__content {
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;

            p {
                font-size: 6rem;
                font-weight: bold;
                font-family: "Sora";
            }

            hr {
                width: 100%;
                height: 4px;
                background-color: black;
                align-self: flex-start;
                margin-top: 1rem;
                margin-bottom: 2rem;
            }

            &--info {
                width: 100%;
                height: 80%;
                display: flex;
                flex-direction: row;
                
                .left {
                    width: 40%;
                    height: 100%;

                    p {
                        font-size: 1.4rem;
                        margin-bottom: 15px;
                    
                        &:nth-child(1) {
                            font-size: 1.6rem;
                            word-spacing: 0.7rem;
                            letter-spacing: 1px;
                            text-align: start;
                        }

                        &:nth-child(2) {
                            font-size: 1.8rem;
                        }

                    }

                    div {
                            display: flex;
                            flex-direction: row;
                            align-items: center;

                            p {
                                height: fit-content;
                                display: flex;
                                justify-content: center;
                                align-content: center;
                                margin-top: 1rem;
                            }

                            svg {
                                margin-top: auto;
                                margin-bottom: auto;

                                &:nth-child(2) {
                                    margin-left: 15px;
                                }

                                margin-left: 2px;
                                margin-right: 2px;
                            }
                        }
                }
                
                .right {
                    width: 60%;
                    height: 100%;
                }
            }
        }
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