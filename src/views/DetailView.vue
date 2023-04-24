<template>
  <div class="detailView">

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent ({
    props: ['test'],
    mounted() {
        console.log(this.$route)
        console.log(this.$props)
    }
})
</script>

<style lang="scss">

</style>