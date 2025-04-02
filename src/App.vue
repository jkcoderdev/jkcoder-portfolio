<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <nav>
        <div class="logo">
          jkcoder<span>.eu</span>
        </div>
        <ul>
          <li><RouterLink to="/">Home</RouterLink></li>
          <li><RouterLink to="/projects">Projects</RouterLink></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </nav>
    </header>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  width: 100%;
  padding: 1rem 2rem;
  background-color: $color-surface;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;

    .logo {
      font-size: 1.5rem;
      font-weight: 700;

      span {
        color: $color-primary;
      }
    }

    ul {
      display: flex;
      gap: 1.5rem;
      list-style: none;

      li a {
        text-decoration: none;
        font-weight: 500;
        letter-spacing: 0.5px;
        color: $color-text;
        transition: 0.2s ease-in-out;

        &:hover {
          color: $color-primary;
        }
      }
    }
  }
}
</style>
