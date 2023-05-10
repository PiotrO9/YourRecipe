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
    <img src="/cook-book.png" 
        alt="Recipe book"
        @click="ChangeMenuVisibility"
        :class="{ noticer: !showMenu }">
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

export default defineComponent ({
    data() {
        return {
            showMenu: false
        }
    },
    methods: {
        ChangeMenuVisibility() {
            this.showMenu = !this.showMenu
        },
        AllRecipesClick() {
            this.$router.push({ name: "home" })
        },
        FavouriteRecipesClick() {
            console.log("favourites")
        },
        AddRecipeClick() {
            this.$router.push({ name: "adding" })
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
        font-family: 'Sora';
        background-color: white;
        border-radius: $ComponentBorderRadius;
        margin-top: 1.5rem;
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

        &.noticer {
            animation: Notice 4s infinite;
        }
    }

    .Options {
        width: 70%;
        height: 50px;
        position: relative;
        z-index: 0;
        overflow: hidden;
        display: flex;
        align-items: center;

        @media (max-width: $SmallWidth) {
            width: 85%;
        }

        menu {
            max-height: 50px;
            display: flex;
            position: absolute;
            z-index: -2;
            gap: 20px;
            transform: translateX(-120px);
            
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
                background-color: $CremeBackground;
                padding: 6px;
                border-radius: $ComponentBorderRadius;
                font-size: 1.2rem;
                font-family: "Sora";
                font-weight: bold;

                @media (max-width: $MediumWidth) {
                    font-size: 1rem;
                }

                @media (max-width: $SmallWidth) {
                    font-size: 0.8rem;
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
        justify-content: flex-end;
        margin-right: 15px;
        gap: 10px;

        img {
            @include SquareSize(35px);
        }

        span {
            font-size: 20px;
            word-spacing: 5px;
            user-select: none;

            @media (max-width: $MediumWidth) {
              font-size: 16px;
              text-align: center;
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
    20%, 65% {
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