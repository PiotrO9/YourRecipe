<template>
  <div class="detailView">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDetailObject } from '@/stores/detailObject';

export default defineComponent ({
    props: ['test'],
    computed: {
        detailObject() {
       return useDetailObject()
    }
    },
    mounted() {
        console.log(this.detailObject.$state.detailRecipe.title)
    }
})
</script>

<style lang="scss">

</style>