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
import AppHeader from '@/components/Core-components/AppHeader.vue';
import AppAside from '@/components/Core-components/AppAside.vue'
import { defineComponent } from 'vue';
import LocalRecipes from '@/datas/localRecipes.json'
import type IRecipesGrid from '@/types/Interfaces/IRecipesGrid'
import Recipe from '@/components/Common-components/Recipe.vue'

export default defineComponent ({
  components: {
    AppHeader,
    AppAside,
    Recipe
  },
  data(): IRecipesGrid {
    return {
      recipes: null,
      path: "/Background-images/Bowl-background.png"
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
          font-family: "Sora";
          margin-left: 3rem;

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
            background-color: white;
            border-radius: $ComponentBorderRadius;
            margin-top: 10%;
            z-index: 1;

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
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;

            img {

              &:nth-child(1) {
                position: absolute;
                aspect-ratio: 16/9;
                height: 150px;
                top: 60px;
                left: 40px;
                overflow: hidden;
                transform: rotate(-10deg);
                animation: firstBackgroundItemMove 2s forwards, firstBackgroundItemSpin 10s infinite;
                animation-delay: 0s, 2s;
              }

              &:nth-child(2) {
                position: absolute;
                aspect-ratio: 16/9;
                height: 60%;
                overflow: hidden;
                left: 150px;
                bottom: -50px;
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
        
        .test {
          @include SquareSize(100%);
          background-color: red;
        }
      }
    }
  }

  @keyframes firstBackgroundItemMove {
    0% {
      transform: translate3d(-80px, -150px, 0px) rotate(20deg);
    }
    100% {
      transform: translate3d(0px, 0px, 0px) rotate(-10deg);
    }
  }

  @keyframes firstBackgroundItemSpin {
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
</style>