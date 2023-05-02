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

          </div>
        </div>
      </div>
        <!-- <div v-if="recipes != null" class="RecipesGrid">
          <Recipe v-for="(recipe, index) in recipes" 
          :key="index"
          :recipe="recipe"/>
        </div> -->
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
      recipes: null
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
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      .Heading {
        width: 90%;
        height: 50%;
        display: flex;
        background-color: $LightOrange;
        margin-top: 2rem;
        border-radius:  20px;

        &__left {
          height: 100%;
          width: 30%;
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

          &--searchContainer {
            width: 70%;
            height: 15%;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: white;
            border-radius: $ComponentBorderRadius;
            margin-top: 10%;

            &__input {
              width: 100%;
              height: 100%;
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
                outline: none;
                border: none;
                padding-left: 1rem;
                padding-right: 1rem;
                background: $CremeBackground;
                border-radius: $ComponentBorderRadius;
                font-family: "Sora";
                font-weight: bold;
                font-size: 100%;
                margin-left: auto;
                margin-right: max(5%, 20px);

                &:hover {
                  cursor: pointer;
                  color: $LightOrange;
                }
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
        overflow-x: scroll;

        &::-webkit-scrollbar {
          display: none;
        }
        
        .test {
          @include SquareSize(100%);
          background-color: red;
        }
      }
    }
  }
</style>