<template>
  <main>
    <Transition name="error" mode="out-in">
      <div class="errorModal error-enter-active" v-if="IsError">
        <ul>
          <li v-for="(item, index) in ErrorList" :key="index">
            {{ item }}</li>
        </ul>
        <button @click="CloseModal">
          OK
        </button>
      </div>
    </Transition>
    <h1>Dodaj nowy przepis</h1>
    <hr>
    <div class="mainContent__title">
      <p>Tytuł <span>*</span></p>
      <input type="text" placeholder="Nazwa przepisu" autocomplete="none" v-model="Title">
    </div>
    <div class="mainContent__difficulty">
      <p>Poziom trudności <span>*</span></p>
      <div class="mainContent__difficulty--stars">
        <SetStar v-for="i in 5" :key="i" :StarHover="HandleStarHover" :StarState="StarsSelected[i - 1]" />
      </div>
    </div>
    <div class="mainContent__time">
      <p>Czas trwania <span>*</span></p>
      <input type="number" min="5" placeholder="5 min" v-model="Duration">
    </div>
    <div class="mainContent__description">
      <p>Opis</p>
      <textarea placeholder="Opis przepisu..." v-model="Description"></textarea>
    </div>
    <div class="mainContent__ingredients">
      <p>Składniki <span>*</span></p>
      <div class="mainContent__ingredients--collection">
        <AddIngredient v-for="(item, index) in Ingredients.length" :key="index" :RemoveIngredient="RemoveIngredient"
          :IngredientData="Ingredients[index]" :UpdateIngredient="HandleUpgradeIngredientData" />
      </div>
      <button @click="AddIngredient">+</button>
    </div>
    <button class="SubmitButton" @click="SubmitRecipe">
      Dodaj
    </button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SetStar from '@/components/Common-components/SetStar.vue'
import AddIngredient from '@/components/Common-components/AddIngredient.vue';
import Ingredient from '@/types/Ingredient'
import type { AddingRecipeViewDataType } from '@/types/ViewsDataTypes/AddingRecipeViewDataTypes';
import RecipeValidation from '@/utils/RecipeValidation'

export default defineComponent({
  components: {
    SetStar,
    AddIngredient
  },
  data(): AddingRecipeViewDataType {
    return {
      Ingredients: [],
      StarsSelected: [true, false, false, false, false],
      Title: "",
      Duration: 5,
      Description: "",
      IsError: false,
      ErrorList: ["błąd 1",]
    }
  },
  methods: {
    HandleStarHover(starNumber: number) {
      this.StarsSelected.fill(false)

      for (let i = 0; i < starNumber; i++) {
        this.StarsSelected[i] = true
      }
      console.log(starNumber)
    },
    AddIngredient() {
      let index = this.getBiggestId() + 1
      const newIngredient = new Ingredient(index, "", 0, "");
      this.Ingredients.push(newIngredient)
    },
    RemoveIngredient(id: number) {
      this.Ingredients.splice(id, 1)
    },
    HandleUpgradeIngredientData(ingredient: Ingredient) {
      this.Ingredients[ingredient.getId()] = ingredient
    },
    getBiggestId() {
      if (this.Ingredients.length === 0) {
        return -1;
      }

      const biggestId = this.Ingredients.reduce((biggest, item) => {
        return item.getId() > biggest ? item.getId() : biggest;
      }, this.Ingredients[0].getId())

      return biggestId
    },
    SubmitRecipe() {
      const recipeValidator = new RecipeValidation(this.Ingredients as Ingredient[], this.Title, this.Duration).validate()

      if (recipeValidator.length == 0) {
        //Add recipe
      }
      else {
        this.ErrorList = recipeValidator
        this.IsError = true
      }
    },
    CloseModal() {
      this.IsError = false
    }
  }
})
</script>

<style scoped lang="scss">
@import "../GlobalStyles/variabless.scss";

* {
  font-family: "Sora";
}

@keyframes slide-in {
  0% {
    transform: translateY(-100vh);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(100vh);
  }
}

main {
  @include SquareSize(100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  position: relative;

  .error-enter-active {
    animation: slide-in 0.6s forwards;
  }

  .error-leave-active {
    animation: slide-out 0.6s forwards;
  }

  .errorModal {
    width: 30%;
    min-width: 200px;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    top: 50%;
    background-color: white;
    border: 2px solid $Orange;
    border-radius: 8px;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
      margin-bottom: 1rem;
      list-style-type: none;

      li {
        text-decoration: none;
        margin-top: 3px;
        margin-bottom: 3px;
        text-align: center;
      }
    }

    button {
      border: 2px solid $Orange;
      width: 100px;
      padding-top: 0.7rem;
      padding-bottom: 0.7rem;
      font-size: 100%;
      margin-bottom: 1rem;
      border-radius: 8px;
      cursor: pointer;
    }
  }

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

    &__title,
    &__difficulty,
    &__time,
    &__description,
    &__ingredients {
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
      p {
        align-self: flex-start;
        margin: 4px;
      }

      &--collection {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      button {
        @include SquareSize(40px);
        @include flex-center;
        margin-top: 1rem;
        background-color: #b4dcf8;
        border: 2px solid #62a9d4;
        border-radius: 50%;
        color: #62a9d4;
        font-size: 2rem;
        cursor: pointer;
        -webkit-transition: font-size 0.5s, transform 0.5s;

        &:hover {
          font-size: 2.4rem;
          transform: rotate(90deg);
          -webkit-transition: font-size 0.5s, transform 0.5s;
        }
      }
    }
  }

  .SubmitButton {
    width: 8%;
    height: 40px;
    min-width: 100px;
    outline: none;
    border: 2px solid $Orange;
    border-radius: 8px;
    color: black;
    font-size: 140%;
    cursor: pointer;
  }
}
</style>