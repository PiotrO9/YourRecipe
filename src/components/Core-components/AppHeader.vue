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
        @click="ChangeMenuVisibility">
    <div class="Options">
        <menu :class="{ showMenu: showMenu }">
            <p>Wszystkie przepisy</p>
            <p>Ulubione</p>
            <p>Dodaj przepis</p>
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
        }
    },
    mounted() {
        const menu: HTMLElement = document.querySelector("menu")

        menu.classList.add("invisible")
        setTimeout(() => {
            menu.classList.remove("invisible")
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
            
            &:first-child {
                color: $Orange;
                font-size: 22px;
            }
        }
    }

    img {
        width: 40px;
        height: 40px;
        margin-left: 20px;
        margin-right: 20px;
        cursor: pointer;
    }

    .Options {
        width: 70%;
        height: 50px;
        position: relative;
        z-index: 0;
        overflow: hidden;
        display: flex;
        align-items: center;

        menu {
            position: absolute;
            z-index: -2;
            display: flex;
            gap: 20px;
            transform: translateX(-120px);
            
            &.invisible {
                opacity: 0;
            }

            &.showMenu {
                animation: options-slide-in 1s forwards;
            }

            &:not(.showMenu) {
                animation: options-slide-out 1s forwards;
            }

            p {
                font-size: 1.5rem;
                font-family: "Sora";
                font-weight: bold;
                background-color: $CremeBackground;
                padding: 6px;
                border-radius: $ComponentBorderRadius;

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
        }
    }

@keyframes options-slide-in {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}

@keyframes options-slide-out {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
}

</style>