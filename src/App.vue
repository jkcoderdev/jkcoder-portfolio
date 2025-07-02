<script setup>
import { RouterView, RouterLink } from 'vue-router';
import { onBeforeMount, useTemplateRef, computed } from 'vue';
import { useScroll } from '@vueuse/core';

import { useLanguageStore } from './stores/language';
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

const wrapper = useTemplateRef('wrapper');
const { y } = useScroll(wrapper);

const scrolled = computed(() => y.value > 32);

const languageStore = useLanguageStore();

onBeforeMount(() => {
  languageStore.loadLanguage();
});
</script>

<template>
  <div class="wrapper" ref="wrapper">
    <div class="container">
      <header class="header" :class="{ 'scrolled': scrolled }">
        <div class="logo">
          jkcoder<span class="highlight">.eu</span>
        </div>

        <div class="header-right">
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

          <LanguageSwitcher />
        </div>
      </header>

      <main class="content">
        <RouterView />
      </main>    
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.container {
  width: $container-width;
  max-width: 100%;
  padding: 0 $container-padding;
  margin: 0 auto;
}

.header {
  width: calc($container-width - 2 * $container-padding);
  max-width: calc(100% - 2 * $container-padding - $scrollbar-width);
  height: $header-height;
  padding: 0 1rem;

  position: fixed;
  top: $container-padding;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: 0.2s;

  &.scrolled {
    border-radius: 0.75rem;
    background-color: rgba($color-surface, 0.5);
    backdrop-filter: blur(1rem);
    box-shadow: inset 0 0 0 1px $color-border, 0 0 1rem rgba(255, 255, 255, 0.125);

    &::before {
      width: 100%;
      height: $container-padding;

      content: '';
      display: block;

      position: absolute;
      bottom: 100%;
      left: 0;
      
      background: linear-gradient(to bottom, $color-background, rgba($color-background, 0.75));
    }
  }

  .logo {
    font-weight: 700;
    font-size: 1.5rem;

    .highlight {
      color: $color-primary;
    }
  }

  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
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
  z-index: auto;
}

// Responsive design
@media (max-width: 768px) {
  .header {
    .header-right {
      gap: 0.5rem;
    }
    
    .navbar ul {
      gap: 0.5rem;
      
      li > a {
        font-size: 0.9rem;
      }
    }
  }
}
</style>