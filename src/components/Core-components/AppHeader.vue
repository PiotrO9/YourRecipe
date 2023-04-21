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
    <div class="Header__name">
        <img src="../../../public/cook-book.png" alt="Recipe book">
        <span>
            Piotr Ostrowski
        </span>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    
})
</script>

<style lang="scss" scoped>
    @import '@/GlobalStyles/variabless.scss';
    
    header {
        width: 100%;
        height: 6%;
        min-width: 400px;
        display: flex;
        justify-content: space-between;
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
            
            &:first-child {
                color: red;
                font-size: 22px;
            }
        }
    }

    .Header__name {
        display: flex;
        align-items: center;
        margin-right: 15px;
        gap: 10px;
        
        img {
            @include SquareSize(35px);
            margin-top: 10px;
        }

        span {
            font-size: 20px;
            margin-top: 20px;
            word-spacing: 7px;
        }
    }

</style>