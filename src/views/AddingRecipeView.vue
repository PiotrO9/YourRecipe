<template>
  <main>
    <h1>Dodaj nowy przepis</h1>
    <hr>
    <div class="mainContent__title">
      <p>Tytuł</p>
      <input type="text" placeholder="Nazwa przepisu">
    </div>
    <div class="mainContent__difficulty">
      <div class="mainContent__difficulty--stars">
        <SetStar :StarHover="HandleStarHover" 
                :StarClick="HandleStarClick"/>
        <SetStar :StarHover="HandleStarHover" 
                :StarClick="HandleStarClick"/>
        <SetStar :StarHover="HandleStarHover" 
                :StarClick="HandleStarClick"/>
        <SetStar :StarHover="HandleStarHover" 
                :StarClick="HandleStarClick"/>
        <SetStar :StarHover="HandleStarHover" 
                :StarClick="HandleStarClick"/>
      </div>
    </div>
    <div class="mainContent__time">

    </div>
    <div class="mainContent__description">

    </div>
    <div class="mainContent__ingredients">
      
    </div>
    <button>
      Dodaj
    </button>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SetStar from '@/components/Common-components/SetStar.vue'

export default defineComponent ({
  components: {
    SetStar
  },
  methods: {
    HandleStarHover(starNumber: number) {
      console.log(starNumber)
    },
    HandleStarClick(starNumber: number) {
      console.log(starNumber)
    }
  }
})
</script>

<style scoped lang="scss">
@import "../GlobalStyles/variabless.scss";

* {
  font-family: "Sora";
}

main {
  @include SquareSize(100%);
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem
  }

  hr {
    width: 90%;
    margin-top: 1rem;
    margin-bottom: 1rem
  }

  .mainContent {

    &__difficulty {
      height: 20%;

      &--stars {
        display: flex;
        flex-direction: row;
        gap: 20px;
        .SetStar {
          @include SquareSize(35px);
          display: flex;
          justify-content: center;
          align-items: center;

          svg {
            @include SquareSize(100%);

            &.gold {
              color: $Orange;
            }
          }
        }
      }
    }
  }

}

</style>