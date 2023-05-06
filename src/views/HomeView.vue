<template>
  <AppHeader />
  <div class="AppContent">
    <main>
      <div class="Heading">
        <div class="Heading__left">
          <h1>Twoje ulubione posiłki</h1>
          <p>Przygotowane specjalnie dla ciebie ze starannie dobranych receptur i składników</p>
        </div>
        <div class="Heading__right">
          <div class="Heading__right--searchContainer">
            <div class="Heading__right--searchContainer__input">
              <fa icon="fa-solid fa-magnifying-glass" />
              <input type="text" 
                id="SearchInput" 
                placeholder="Wpisz czego szukasz..."
                autocomplete="none">
                <button>
                  Wyszukaj
                </button>
            </div>
          </div>
          <div class="Heading__right--backgroundImages">
            <img src="/Background-images/Pizza-background.png" alt="Bowl background image">
            <img src="/Background-images/Sphagetti-background.png" alt="Sphagetti background image">
            <img src="/Background-images/Bowl-background.png" alt="Sphagetti background image">
          </div>
        </div>
      </div>
        <div v-if="recipes != null" class="RecipesGrid">
          <Recipe v-for="(recipe, index) in recipes" 
          :key="index"
          :recipe="recipe"/>
        </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppHeader from '@/components/Core-components/AppHeader.vue';
import AppAside from '@/components/Core-components/AppAside.vue'
import LocalRecipes from '@/datas/localRecipes.json'
import Recipe from '@/components/Common-components/Recipe.vue'
import type HomeViewDataTypes from '@/types/ViewsDataTypes/HomeViewDataTypes';

export default defineComponent ({
  components: {
    AppHeader,
    AppAside,
    Recipe
  },
  data(): HomeViewDataTypes {
    return {
      recipes: null,
    }
  },
  mounted() {
    this.recipes = LocalRecipes
  }
})
</script>

<style lang="scss" scoped>
@import '@/GlobalStyles/variabless.scss';
  .AppContent {
    width: 100%;
    height: 93%;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 20px;

    main {
      @include SquareSize(100%);
      display: flex;
      align-items: center;
      flex-direction: column;
      overflow-x: scroll;

      .Heading {
        width: 90%;
        height: 100%;
        min-height: 500px;
        display: flex;
        margin-top: 2rem;
        background-color: $LightOrange;
        border-radius:  20px;
        overflow: hidden;

        &__left {
          width: 30%;
          height: 100%;
          display: flex;
          flex-direction: column;
          margin-left: 3rem;
          font-family: "Sora";

          h1 {
            margin-top: auto;
            margin-bottom: 3rem;
            font-size: 3.5rem;
          }

          p {
            margin-bottom: auto;
            font-size: 2rem;
          }
        }

        &__right {
          width: 70%;
          height: 100%;
          display: flex;
          justify-content: center;
          position: relative;

          &--searchContainer {
            width: 70%;
            height: 15%;
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 10%;
            z-index: 1;
            background-color: white;
            border-radius: $ComponentBorderRadius;

            &__input {
              @include SquareSize(100%);
              max-height: 50px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: 10px;

              svg {
                height: 1.5rem;
                margin-left: 1rem;
              }

              input {
                height: 100%;
                outline: none;
                border: none;
                background-color: white;
                color: black;
                font-size: 100%;
                font-family: "Sora";
                font-weight: bold;
              }

              button {
                min-height: 40px;
                margin-left: auto;
                margin-right: max(5%, 20px);
                padding-left: 1rem;
                padding-right: 1rem;
                outline: none;
                border: none;
                background: $CremeBackground;
                border-radius: $ComponentBorderRadius;
                font-family: "Sora";
                font-weight: bold;
                font-size: 100%;

                &:hover {
                  cursor: pointer;
                  color: $LightOrange;
                }
              }
            }
          }

          &--backgroundImages {
            @include SquareSize(100%);
            position: absolute;
            top: 0;
            left: 0;

            img {
              position: absolute;
              aspect-ratio: 16/9;
              overflow: hidden;

              &:nth-child(1) {
                height: 150px;
                top: 60px;
                left: 40px;
                transform: rotate(-10deg);
                animation: FirstBackgroundImageMove 2s forwards, FirstBackgroundImageSpin 10s infinite ease-in-out;
                animation-delay: 0s, 2s;
              }

              &:nth-child(2) {
                height: 60%;
                left: 150px;
                bottom: -50px;
                animation: SecondBackgroundImageMove 3s forwards, SecondBackgroundImageSpin 12s infinite ease-in-out;
                animation-delay: 0s, 3s;
              }

              &:nth-child(3) {
                aspect-ratio: 1/1;
                height: 30%;
                right: -50px;
                top: 140px;
                height: 70%;
                animation: ThirdBackgroundImageMove 3s forwards, ThirdBackgorundImageSpin 10s infinite ease-in-out;
                animation-delay: 0s, 3s;
              }
            }
          }
        }
      }
      
      .RecipesGrid {
        height: 80%;
        width: 90%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 50px;
        margin-top: 2rem;
      }
    }
  }

  @keyframes FirstBackgroundImageMove {
    0% {
      transform: translate3d(-80px, -150px, 0px) rotate(20deg);
    }
    100% {
      transform: translate3d(0px, 0px, 0px) rotate(-10deg);
    }
  }

  @keyframes FirstBackgroundImageSpin {
    0% {
      transform:  rotate(-10deg);
    }
    50% {
      transform: translate3d(20px, 10px, 0px) rotate(15deg);
    }
    100% {
      transform: translate3d(0px, 0px, 0px) rotate(-10deg);
    }
  }

  @keyframes SecondBackgroundImageMove {
    0% {
      transform: translate3d(-100px, 250px, 0px) rotate(-20deg);
    }
    100% {
      transform: translate3d(0px, 0px, 0px) rotate(0deg);
    }
  }

  @keyframes SecondBackgroundImageSpin {
    0% {
      transform: translate3d(0px, 0px, 0px) rotate(0deg);
    }
    25% {
      transform: translate3d(50px, 30px, 0px) rotate(10deg);
    }
    75% {
      transform: translate3d(-50px, 30px, 0px) rotate(-10deg);
    }
    100% {
      transform: translate3d(0px, 0px, 0px) rotate(0deg);
    }
  }

  @keyframes ThirdBackgroundImageMove {
    0% {
      transform: translate3d(300px, 20px, 0px) rotate(30deg);
    }
    100% {
      transform: translate3d(0px, 20px, 0px) rotate(0deg);
    }
  }

  @keyframes ThirdBackgorundImageSpin {
    25%, 75% {
      transform: translate3d(30px, -30px, 0px) rotate(-7deg);
    }
    50% {
      transform: translate3d(0px, -60px, 0px) rotate(7deg);
    }
  }
</style>