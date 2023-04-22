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
      <main>

      </main>
    </main>
  </div>
</template>

<script lang="ts">
import AppHeader from '@/components/Core-components/AppHeader.vue';
import AppAside from '@/components/Core-components/AppAside.vue'
import { defineComponent } from 'vue';

export default defineComponent ({
  components: {
    AppHeader,
    AppAside
  }
})
</script>

<style lang="scss">
@import '@/GlobalStyles/variabless.scss';

  .AppContent {
    @include SquareSize(100%);
    display: flex;
    align-content: center;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 20px;

    main {
      width: 80%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .SearchContainer {
        height: 20%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        &__TextInput {
          height: 40%;
          width: 75%;
          display: flex;
          flex-direction: row;
          align-content: center;
          justify-content: center;
          gap: 10px;
          background-color: white;
          border-radius: $ComponentBorderRadius;

          svg {
            @include SquareSize(30px);
            margin-top: 22px;
            margin-left: 10px
          }

          input {
            height: 100%;
            width: 100%;
            font-size: 20px;
            outline: none;
            border: none;
            color: black;
            background-color: white;
            font-weight: bold;
            font-family: "Sora";
          }
        }

        &__Submit {
          height: 40%;
          width: 15%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
          border-top-right-radius: $ComponentBorderRadius;
          border-bottom-right-radius: $ComponentBorderRadius;

          button {
            outline: none;
            border: none;
            background-color: $CremeBackground;
            min-width: 120px;
            min-height: 45px;
            font-family: "Sora";
            font-weight: bold;
            font-size: 1.3rem;
            border-radius: $ComponentBorderRadius;
          }
        }
      }
    }
  }
</style>