<template>
  <AppHeader />
  <div class="AppContent">
    <AppAside />
    <main>
      <div class="SearchContainer">
        <div class="SearchContainer__TextInput">
          <fa icon="fa-solid fa-magnifying-glass" />
          <input type="text" 
          id="SearchInput" 
          placeholder="Wpisz czego szukasz..."
          autocomplete="none">
        </div>
        <div class="SearchContainer__Submit">
          <button>Szukaj</button>
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
      width: 80%;
      height: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;

      .SearchContainer {
        @include flex-center;
        width: 100%;
        height: 20%;
        flex-direction: row;

        &__TextInput {
          @include flex-center;
          width: 75%;
          height: 40%;
          flex-direction: row;
          gap: 10px;
          background-color: white;
          border-radius: $ComponentBorderRadius;

          svg {
            @include SquareSize(30px);
            margin-top: auto;
            margin-bottom: auto;
            margin-left: 10px
          }

          input {
            @include SquareSize(100%);
            outline: none;
            border: none;
            background-color: white;
            color: black;
            font-size: 20px;
            font-weight: bold;
            font-family: "Sora";
          }
        }

        &__Submit {
          @include flex-center;
          width: 15%;
          height: 40%;
          background-color: white;
          border-top-right-radius: $ComponentBorderRadius;
          border-bottom-right-radius: $ComponentBorderRadius;

          button {
            min-width: 120px;
            min-height: 45px;
            background-color: $CremeBackground;
            outline: none;
            border: none;
            border-radius: $ComponentBorderRadius;
            font-family: "Sora";
            font-weight: bold;
            font-size: 1.3rem;
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