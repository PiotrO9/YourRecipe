<template>
  <header>
    <LogoContainer />
  </header>
</template>

<script lang="ts">
import LogoContainer from '../Common-components/LogoContainer.vue'
import { defineComponent } from 'vue';


export default defineComponent ({
    components: {
        LogoContainer
    }
})
</script>

<style lang="scss" scoped>
    header {
        width: 100%;
        height: 10%;
    }
</style>