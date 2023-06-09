<template>
    <div class="detailView">
        <img v-if="imageFullPath == ''" class="mainImage" src="/Recipe-images/pusty.jpg" :alt="recipe?.title">
        <img v-else class="mainImage" :src=imageFullPath :alt=recipe?.title>
        <h1 id="MainRecipeName"></h1>
        <div class="RecipeDatas" id="RecipeDatas">
            <div class="RecipeDatas__content">
                <p>{{ recipe?.title }}</p>
                <hr>
                <div class="RecipeDatas__content--info">
                    <section class="left">
                        <p>{{ recipe?.description }}</p>
                        <p>Czas przygotowania: {{ prepareTime }}</p>
                        <div>
                            <p>Trudność: </p>
                            <fa v-for="i in recipe?.difficulty" :key="i" icon="fa-solid fa-star" />
                        </div>
                    </section>
                    <section class="right">
                        <p>Składniki</p>
                        <div class="Ingredients">
                            <Ingredient v-for="(ingredient, index) in recipe?.ingredients" :key="index"
                                :ingredients="ingredient" />
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Typewriter from "@/types/TypeWriter"
import { useDetailObject } from '@/stores/detailObject';
import type DetailViewDataTypes from '@/types/ViewsDataTypes/DetailViewDataTypes';
import CombineFullImagePath from '@/utils/CombineFullImagePath';
import type { Recipe } from '@/types/Recipe';
import Ingredient from '@/components/Common-components/Ingredient.vue';
import TimeConverter from '@/utils/TimeConverter';

export default defineComponent({
    components: {
        Ingredient
    },
    data(): DetailViewDataTypes {
        return {
            recipe: null,
            imageFullPath: undefined,
            prepareTime: "0 min"
        }
    },
    computed: {
        detailObject() {
            return useDetailObject()
        }
    },
    mounted() {
        this.recipe = this.detailObject.$state.detailRecipe as Recipe

        if (this.recipe !== null && this.recipe !== undefined) {
            this.imageFullPath = (this.recipe.ImagePath === "") ? "" : CombineFullImagePath(this.recipe.ImagePath)
        }
        else {
            this.$router.push({ name: "home" })
        }

        const mainRecipeName: HTMLElement = document.getElementById("MainRecipeName") as HTMLElement

        const typeWriter = new Typewriter(mainRecipeName, {
            loop: false,
            typingSpeed: 90
        })

        typeWriter.typeString(this.recipe?.title).start()

        const RecipeDatas: HTMLElement | null = document.getElementById("RecipeDatas")

        setTimeout(() => {
            RecipeDatas?.scrollIntoView({ behavior: 'smooth' })
        }, 1500);

        const leftElements: HTMLCollection | undefined = document.querySelector(".left")?.children
        const rightElements: HTMLCollection | undefined = document.querySelector(".right")?.children

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                }
            })
        })

        if (leftElements != undefined && rightElements != undefined) {
            for (let i = 0; i < leftElements.length; i++) {
                setTimeout(() => {
                    observer.observe(leftElements[i])
                });
            }

            for (let i = 0; i < rightElements.length; i++) {
                setTimeout(() => {
                    observer.observe(rightElements[i])
                });
            }
        }

        const timeConverter: TimeConverter = new TimeConverter()
        this.prepareTime = timeConverter.convert(this.recipe.prepareTime)
    }
})
</script>

<style scoped lang="scss">
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

        @media (max-width: 1440px) {
            width: 100%;
            height: auto;
        }

        @media (max-width: 1024px) {
            display: none;
        }
    }

    h1 {
        position: absolute;
        top: 5rem;
        left: 8rem;
        color: $CremeBackground;
        font-size: 8rem;
        font-family: "Kaushan Script";
        user-select: none;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;

        @media (max-width: 1024px) {
            display: none;
        }
    }

    .RecipeDatas {
        @include flex-center;
        width: 100vw;
        height: 100vh;
        padding-top: -10px;
        background-color: $CremeBackground;

        &__content {
            width: 70%;
            height: 100%;
            display: flex;
            flex-direction: column;

            @media (max-width: 1024px) {
                width: 80%;
            }

            p {
                margin-top: 20px;
                text-align: center;
                font-size: 6rem;
                font-weight: 600;
                font-family: "Sora";

                &:nth-child(2) {
                    text-align: start;
                }

                @media (max-width: 1024px) {
                    font-size: 4.5rem;
                }

                @media (max-width: $MobileMediumWidth) {
                    font-size: 3rem;
                }
            }

            hr {
                width: 100%;
                height: 4px;
                align-self: flex-start;
                margin-top: 1rem;
                margin-bottom: 2rem;
                background-color: black;
            }

            &--info {
                width: 100%;
                height: 80%;
                display: flex;
                flex-direction: row;

                @media (max-width: $VerySmallWidth) {
                    flex-direction: column;
                }

                .left {
                    width: 40%;
                    height: 100%;
                    margin-left: 20px;

                    @media (max-width: $VerySmallWidth) {
                        width: 100%;
                        height: max-content;
                        margin-left: 0px;
                    }

                    * {
                        &.show {
                            animation: show-up-left 2s forwards;
                        }
                    }

                    p {
                        font-size: 1.4rem;
                        margin-bottom: 15px;

                        &:nth-child(1) {
                            text-align: start;
                            font-size: 1.6rem;
                            word-spacing: 0.7rem;
                            letter-spacing: 1px;

                            @media (max-width: 1024px) {
                                font-size: 1.3rem;
                                letter-spacing: 0px;
                            }

                            @media (max-width: $VerySmallWidth) {
                                text-align: center;
                            }
                        }

                        &:nth-child(2) {
                            font-size: 1.8rem;

                            @media (max-width: 1024px) {
                                font-size: 1.5rem;
                            }

                            @media (max-width: $VerySmallWidth) {
                                text-align: center;
                            }
                        }
                    }

                    div {
                        display: flex;
                        flex-direction: row;
                        align-items: center;

                        @media (max-width: $VerySmallWidth) {
                            justify-content: center;
                        }

                        p {
                            @include flex-center;
                            height: fit-content;
                            margin-top: 1rem;
                        }

                        svg {
                            margin-top: auto;
                            margin-bottom: auto;
                            color: $Orange;

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
                    margin-left: 20px;

                    @media (max-width: $VerySmallWidth) {
                        width: 100%;
                        margin-left: 0px;
                        margin-bottom: 2rem;
                    }

                    * {
                        &.show {
                            animation: show-up-right 2s forwards;
                        }
                    }

                    .Ingredients {
                        @media (max-width: $MobileMediumWidth) {
                            margin-bottom: 2rem;
                        }
                    }

                    p {
                        font-size: 4rem;

                        @media (max-width: 1024px) {
                            font-size: 2.5rem;
                        }

                        @media (max-width: $MobileMediumWidth) {
                            font-size: 2rem;
                        }
                    }
                }
            }
        }
    }

    @keyframes show-up-left {
        0% {
            transform: translateX(-100vw);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes show-up-right {
        0% {
            transform: translateX(100vw);
            opacity: 0;
        }

        100% {
            transform: translateX(0);
            opacity: 1;
        }
    }
}
</style>