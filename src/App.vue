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
$header-height: 4rem;

.container {
  width: 800px;
  max-width: 100%;
  margin: 0 auto;

  position: relative;
}

.header {
  width: 100%;
  height: $header-height;
  padding: 0 1rem;

  position: sticky;
  top: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px $color-border solid;
  border-radius: 0.75rem;
  background-color: rgba($color-surface, 0.5);
  backdrop-filter: blur(1rem);
  box-shadow: 0 0 1rem rgba(255, 255, 255, 0.125);

  .logo {
    font-weight: 700;
    font-size: 1.5rem;

    .highlight {
      color: $color-primary;
    }
  }

  .navbar {
    ul {
      display: flex;
      gap: 1rem;

      list-style: none;

      li > a {
        text-decoration: none;
        letter-spacing: 0.5px;
        color: $color-muted;

        transition: .2s;

        &.active {
          color: $color-text;
          font-weight: 700;
          pointer-events: none;
        }

        &:hover {
          color: $color-text;
          text-shadow: 0 0 0.25rem $color-primary-light;
        }
      }
    }
  }
}

.content {
  margin-top: -4rem;
}
</style>
