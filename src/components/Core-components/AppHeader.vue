<template>
    <header>
        <div class="Header__logo">
            <span>
                Twoje
            </span>
            <span>
                Przepisy
            </span>
        </div>
        <img src="/cook-book.png" alt="Recipe book" @click="ChangeMenuVisibility" :class="{ noticer: !showMenu }">
        <div class="Options">
            <menu :class="{ showMenu: showMenu }">
                <p @click="AllRecipesClick">Wszystkie przepisy</p>
                <p @click="FavouriteRecipesClick">Ulubione</p>
                <p @click="AddRecipeClick">Dodaj przepis</p>
            </menu>
        </div>
        <div class="Header__name">
            <span>
                Piotr Ostrowski
            </span>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useFavourites } from '@/stores/favourites';

export default defineComponent({
    props: ['SetFavouriteRecipes', 'SetAllRecipes'],
    data() {
        return {
            showMenu: false
        }
    },
    computed: {
        Favourites() {
            return useFavourites()
        }
    },
    methods: {
        ChangeMenuVisibility() {
            this.showMenu = !this.showMenu
        },
        AllRecipesClick() {
            this.Favourites.removeAllFavourites
            this.$props.SetAllRecipes()
        },
        FavouriteRecipesClick() {
            this.$props.SetFavouriteRecipes()
        },
        AddRecipeClick() {
            this.$router.push({ name: "add-recipe" })
        }
    },
    mounted() {
        const menu: HTMLElement | null = document.querySelector("menu")

        menu?.classList.add("invisible")
        setTimeout(() => {
            menu?.classList.remove("invisible")
        }, 1000);
    }
})
</script>

<style lang="scss" scoped>
@import '@/GlobalStyles/variabless.scss';

header {
    width: 98%;
    height: 6%;
    min-width: 400px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 1.5rem;
    background-color: white;
    border-radius: $ComponentBorderRadius;
    font-family: 'Sora';
}

.Header__logo {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 15px;
    gap: 10px;

    span {
        font-weight: bold;
        user-select: none;

        @media (max-width: 768px) {
            display: none;
        }

        &:first-child {
            color: $Orange;
            font-size: 22px;
        }
    }
}

img {
    @include SquareSize(40px);
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;

    @media (max-width: 768px) {
        @include SquareSize(35px);
    }

    @media (max-width: $MobileMediumWidth) {
        margin-left: 0px;
        margin-right: 10px;
    }

    @media (max-width: $MobileSmallWidth) {
        @include SquareSize(30px);
    }

    &.noticer {
        animation: Notice 4s infinite;
    }
}

.Options {
    width: 70%;
    height: 50px;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    z-index: 0;

    @media (max-width: $SmallWidth) {
        width: 85%;
    }

    menu {
        max-height: 50px;
        display: flex;
        gap: 20px;
        position: absolute;
        z-index: -2;
        transform: translateX(-120px);

        @media (max-width: $MobileMediumWidth) {
            gap: 10px;
        }

        &.invisible {
            opacity: 0;
        }

        &.showMenu {
            animation: Options-slide-in 1s forwards;
        }

        &:not(.showMenu) {
            animation: Options-slide-out 1s forwards;
        }

        p {
            width: fit-content;
            display: flex;
            align-items: center;
            padding: 6px;
            border-radius: $ComponentBorderRadius;
            background-color: $CremeBackground;
            font-size: 1.2rem;
            font-family: "Sora";
            font-weight: bold;

            @media (max-width: $MediumWidth) {
                font-size: 1rem;
            }

            @media (max-width: $SmallWidth) {
                font-size: 0.8rem;
            }

            @media (max-width: 768px) {
                padding: 3px;
                text-align: center;
                font-size: 70%;
            }

            &:hover {
                color: $Orange;
                cursor: pointer;
            }
        }
    }
}

.Header__name {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: end;
    margin-right: 15px;
    gap: 10px;

    span {
        font-size: 20px;
        word-spacing: 5px;
        user-select: none;

        @media (max-width: $MediumWidth) {
            text-align: center;
            font-size: 16px;
        }

        @media (max-width: 768px) {
            margin-right: 0px;
            margin-left: 10px;
            font-size: 12px;
        }
    }
}

@keyframes Options-slide-in {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(0%);
    }
}

@keyframes Options-slide-out {
    0% {
        transform: translateX(0%);
    }

    100% {
        transform: translateX(-100%);
    }
}

@keyframes Notice {

    20%,
    65% {
        transform: translateX(0) rotate(0deg);
    }

    45% {
        transform: translateX(10%) rotate(30deg);
    }

    80% {
        transform: translateX(-10%) rotate(-30deg);
    }
}
</style>