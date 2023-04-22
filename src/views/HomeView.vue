<template>
  <AppHeader />
  <div class="AppContent">
    <AppAside />
  </div>
</template>

<script lang="ts">
import AppHeader from '@/components/Core-components/AppHeader.vue';
import AppAside from '@/components/Core-components/AppAside.vue'
import { defineComponent } from 'vue';

export default defineComponent ({
  components: {
    AppHeader,
    AppAside
  }
})
</script>

<style lang="scss">
  .AppContent {
    height: 100%;
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 20px;
  }
</style>