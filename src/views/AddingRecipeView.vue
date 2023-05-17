<template>
  <main>
    <h1>Dodaj nowy przepis</h1>
    <hr>
    <div class="mainContent__title">
      <p>Tytuł <span>*</span></p>
      <input type="text" 
        placeholder="Nazwa przepisu" 
        autocomplete="none">
    </div>
    <div class="mainContent__difficulty">
      <p>Poziom trudności <span>*</span></p>
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
      <p>Czas trwania <span>*</span></p>
      <input type="number" min="5" placeholder="5 min">
    </div>
    <div class="mainContent__description">
      <p>Opis</p>
      <textarea placeholder="Opis przepisu..."></textarea>
    </div>
    <div class="mainContent__ingredients">
      <p>Składniki <span>*</span></p>
      <div class="mainContent__ingredients--collection">
        <AddIngredient />
      </div>
    </div>
    <button>
      Dodaj
    </button>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SetStar from '@/components/Common-components/SetStar.vue'
import AddIngredient from '@/components/Common-components/AddIngredient.vue';

export default defineComponent ({
  components: {
    SetStar,
    AddIngredient
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
    margin-bottom: 1rem;
  }

  hr {
    width: 90%;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .mainContent {
    &__title, &__difficulty, &__time, &__description, &__ingredients {
      @include flex-center;
      width: max(25%, 300px);
      flex-direction: column;
      margin-bottom: 2rem;

       p {
          font-size: 1.5rem;

          span {
            color: red;
          }
       }
    }

    &__title {

      p {
        margin: 3px;
        align-self: flex-start;
      }

      input {
        width: 100%;
        min-height: 40px;
        padding-left: 10px;
        color: black;
        font-size: 100%;
        outline: none;
        border: 2px solid $Orange;
        border-radius: 8px;
      }
    }

    &__difficulty {
      height: 10%;

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

    &__time {
      p {
        align-self: flex-start;
        margin: 4px;
      }

      input {
        width: 100%;
        height: 40px;
        outline: none;
        border: 2px solid $Orange;
        border-radius: 8px;
        font-size: 100%;
        padding-left: 0.7rem;
      }
    }

    &__description {
      height: 15%;

      p {
        align-self: flex-start;
        margin: 4px;
      }

      textarea {
        width: 100%;
        height: 80%;
        padding: 4px;
        outline: none;
        border: 2px solid $Orange;
        border-radius: 8px;
        font-size: 100%;
      }
    }

    &__ingredients {

      &--collection {

      }
    } 
  }

  button {
    width: 8%;
    height: 40px;
    min-width: 100px;
    outline: none;
    border: 2px solid $Orange;
    border-radius: 8px;
    color: black;
    font-size: 140%;
  }
}
</style>