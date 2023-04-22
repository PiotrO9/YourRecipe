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
        width: 98%;
        height: 6%;
        min-width: 400px;
        display: flex;
        justify-content: space-between;
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
        }

        span {
            font-size: 20px;
            word-spacing: 5px;
        }
    }

</style>