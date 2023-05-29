<template>
  <div class="Recipe">
    <FavouriteIcon :id="recipe.id" />
    <img v-if="recipe != undefined && recipe.ImagePath != ''" class="Recipe__image" :src=imageFullPath />
    <img v-else class="Recipe__image" src="/Recipe-images/pusty.jpg" />
    <div class="Recipe__details">
      <p class="Recipe__details--title" @click="HandleTitleCLick">{{ recipe.title }}</p>
      <div class="Recipe__details--difficulty">
        <p>Trudność przygotowania:</p>
        <div class="Recipe__details--difficulty__stars">
          <fa v-for="i in recipe?.difficulty" :key="i" icon="fa-solid fa-star" />
        </div>
      </div>
      <p class="Recipe__details--description">{{ recipe.description }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDetailObject } from '@/stores/detailObject';
import CombineFullImagePath from '@/utils/CombineFullImagePath';
import FavouriteIcon from "@/components/Common-components/FavouriteIcon.vue"
import type RecipeDataTypes from "@/types/RecipeDataTypes"

export default defineComponent({
  props: ['recipe'],
  components: {
    FavouriteIcon
  },
  data(): RecipeDataTypes {
    return {
      imageFullPath: undefined
    }
  },
  computed: {
    detailObject() {
      return useDetailObject()
    }
  },
  methods: {
    HandleTitleCLick() {
      this.detailObject.setRecipeDetail(this.$props.recipe)
      this.$router.push({
        name: "recipe-details"
      })
    },
    UpdateImagePath() {
      this.imageFullPath = CombineFullImagePath(this.recipe.ImagePath)
    }
  },
  mounted() {
    this.UpdateImagePath()
  },
  watch: {
    recipe() {
      this.UpdateImagePath()
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../../GlobalStyles/variabless.scss";

.Recipe {
  width: 100%;
  height: max-content;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-color: white;
  border-radius: $ComponentBorderRadius;

  @media (max-width: $VerySmallWidth) {
    max-height: 550px;
  }

  img {
    width: calc(100% - 30px);
    margin-top: 15px;
    aspect-ratio: 16/9;
    border-radius: $ComponentBorderRadius;
    -webkit-transition: width 0.3s, margin-top 0.3s;

    &:hover {
      width: 100%;
      margin-top: 0px;
      -webkit-transition: width 0.3s, margin-top 0.3s;
    }
  }

  &__details {
    margin: 4px;
    font-family: "Sora";
    user-select: none;

    .longDescription {
      font-size: 1rem;
    }

    &--title {
      width: fit-content;
      margin: 6px 0px 4px 18px;
      font-weight: 700;
      font-size: 2rem;
      cursor: pointer;
    }

    &--difficulty {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-left: 12px;
      margin-bottom: 7px;

      p {
        margin-left: 6px;
        font-weight: bold;
        font-size: 1.2rem;

        @media (max-width: $ExtraLargeWidth) {
          font-size: 1.05rem;
        }
      }

      &__stars {
        width: max(110px, 10%);
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 5px;
        margin-left: 8px;

        @media (max-width: $LargeWidth) {
          width: max(150px, 10%);
          margin-left: 0px;
          margin-right: 4px;
        }

        svg {
          color: $Orange;

          @media (max-width: $LargeWidth) {
            height: 14px;
          }
        }
      }
    }

    &--description {
      display: -webkit-box;
      margin-left: 18px;
      margin-right: 10px;
      overflow: hidden;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      text-align: start;
      font-size: 1.2rem;
      font-weight: 400;
    }
  }
}
</style>