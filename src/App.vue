<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem;
}
</style>
