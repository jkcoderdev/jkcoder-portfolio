<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div id="container">
    <header>
      
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#container {
  margin: 0 auto;
  width: 800px;
  max-width: 100%;
}
</style>
