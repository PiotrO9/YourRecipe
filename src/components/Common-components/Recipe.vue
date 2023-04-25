<template>
  <div class="Recipe">
    <img v-if="recipe != undefined" 
      class="Recipe__image" 
      :src=imageFullPath />
      <div class="Recipe__details">
        <p class="Recipe__details--title" @click="HandleTitleCLick">{{ recipe.title }}</p>
        <p :class="{ longDescription: recipe.description.length > 300 }" 
          class="Recipe__details--description">{{ recipe.description }}</p>
      </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDetailObject } from '@/stores/detailObject';
import CombineFullImagePath from '@/utils/CombineFullImagePath';

interface IRecipeDatas {
  imageFullPath: undefined | string
}

export default defineComponent ({
  data(): IRecipeDatas {
    return {
      imageFullPath: undefined
    }
  },
  computed: {
    detailObject() {
       return useDetailObject()
    }
  },
  props: ['recipe'],
  methods: {
    HandleTitleCLick() {
      this.detailObject.setRecipeDetail(this.$props.recipe)
      this.$router.push({
        name: "details"
      })
    }
  },
  mounted() {
    this.imageFullPath = CombineFullImagePath(this.recipe.ImagePath)
  }
})
</script>

<style lang="scss" scoped>
@import "../../GlobalStyles/variabless.scss";
  .Recipe {
    width: 100%;
    height: max-content;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: $ComponentBorderRadius;

    img {
      width: 100%;
      aspect-ratio: 16/9;
      border-radius: $ComponentBorderRadius;
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
        margin: 6px 0px 4px 8px;
        font-weight: 700;
        font-size: 2rem;
        cursor: pointer;
      }

      &--description {
        text-align: start;
        margin-left: 5px;
        font-size: 1.2rem;
        font-weight: bold;
      }
    }
  }
</style>