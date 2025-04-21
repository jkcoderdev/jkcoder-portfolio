<script setup>
import { RouterView } from 'vue-router';
import Baner from './components/baner/Baner.vue';
import Navbar from './components/navbar/Navbar.vue';
import NavLink from './components/navbar/NavLink.vue';
</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <Baner />

      <Navbar>
        <NavLink route="home">Home</NavLink>
        <NavLink route="home">Test</NavLink>
        <NavLink route="home">Test 2</NavLink>
      </Navbar>
    </div>
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.header {
  padding: 1rem $content-padding;

  .header-wrapper {
    width: $content-width;
    max-width: 100%;

    margin: 0 auto;

    display: flex;
    justify-content: space-between;
  }
}
</style>
