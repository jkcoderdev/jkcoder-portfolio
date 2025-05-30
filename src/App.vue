<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
    <header class="header">
      <div class="logo">
        jkcoder<span class="highlight">.eu</span>
      </div>

      <nav class="navbar">
        <ul>
          <li>
            <RouterLink to="/" activeClass="active">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/projects" activeClass="active">Projects</RouterLink>
          </li>
          <li>
            <RouterLink to="/about" activeClass="active">About</RouterLink>
          </li>
        </ul>
      </nav>
    </header>

    <main class="content">
      <RouterView />
    </main>    
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 800px;
  max-width: 100%;
  margin: 0 auto;
}

.header {
  margin: 1rem 0;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px $color-border solid;
  border-radius: 0.75rem;
  background-color: rgba($color-surface, 0.5);

  .logo {
    font-weight: 700;
    font-size: 1.5rem;

    .highlight {
      color: $color-primary
    }
  }

  .navbar {
    ul {
      display: flex;
      gap: 1rem;

      list-style: none;
      // color: $color-text;

      li > a {
        text-decoration: none;
        color: currentColor;
        letter-spacing: 0.5px;
        opacity: 0.75;

        transition: .2s;

        &.active {
          opacity: 1;
          font-weight: 700;
          pointer-events: none;
        }

        &:hover {
          text-shadow: 0 0 0.25rem $color-primary-light;
        }
      }
    }
  }
}

.content {
  padding: 1rem;
}
</style>
