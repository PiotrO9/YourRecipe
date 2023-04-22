<template>
  <div class="Recipe">
    <img v-if="recipe != undefined" 
      class="Recipe__image" 
      :src=imageFullPath />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface IRecipeDatas {
  imageFullPath: undefined | string
}

export default defineComponent ({
  data(): IRecipeDatas {
    return {
      imageFullPath: undefined
    }
  },
  props: ['recipe'],
  methods: {
    CombineFullImagePath() {
      this.imageFullPath = "/Recipe-images/" + this.recipe.ImagePath;
    }
  },
  mounted() {
    this.CombineFullImagePath()
  }
})
</script>

<style lang="scss" scoped>
@import "../../GlobalStyles/variabless.scss";
  .Recipe {
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: $ComponentBorderRadius;

    img {
      width: 100%;
      aspect-ratio: 16/9;
      border-radius: $ComponentBorderRadius;
    }
  }
</style>