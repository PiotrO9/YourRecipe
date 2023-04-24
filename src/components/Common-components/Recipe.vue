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
    CombineFullImagePath() {
      this.imageFullPath = "/Recipe-images/" + this.recipe.ImagePath;
    },
    HandleTitleCLick() {
      this.detailObject.setRecipeDetail(this.$props.recipe)
      this.$router.push({
        name: "details"
      })
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
      font-family: "Sora";
      margin: 4px;
      user-select: none;

      .longDescription {
        font-size: 1rem;
      }
      
      &--title {
        width: fit-content;
        font-weight: 700;
        font-size: 2rem;
        margin: 6px 0px 4px 8px;
        cursor: pointer;
      }

      &--description {
        font-size: 1.2rem;
        font-weight: bold;
        margin-left: 5px;
        text-align: start;
      }
    }
  }
</style>