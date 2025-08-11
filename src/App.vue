<script setup>
import { RouterView, RouterLink, useRoute } from 'vue-router';
import { useTemplateRef, computed, ref } from 'vue';
import { useScroll } from '@vueuse/core';
import { useHead } from '@unhead/vue';

import LanguageSwitcher from '@/components/LanguageSwitcher.vue';

const route = useRoute();

const currentLocale = computed(() => route.params.locale || 'en');

useHead({
  htmlAttrs: {
    lang: currentLocale.value,
  },
});

const wrapper = useTemplateRef('wrapper');
const { y } = useScroll(wrapper);

const scrolled = computed(() => y.value > 32);

// Mobile menu state
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};
</script>

<template>
  <div class="wrapper" ref="wrapper">
    <div class="container">
      <header class="header" :class="{ 'header--scrolled': scrolled }">
        <div class="header__left logo">
          jkcoder<span class="logo__highlight">.eu</span>
        </div>

        <div class="header__right">
          <nav class="desktop-navbar">
            <ul>
              <li>
                <RouterLink
                  :to="`/${currentLocale}`"
                  active-class="active"
                  exact-active-class="active"
                >
                  {{ $t('meta.home.title') }}
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="`/${currentLocale}/projects`"
                  active-class="active"
                >
                  {{ $t('meta.projects.title') }}
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="`/${currentLocale}/about`"
                  active-class="active"
                >
                  {{ $t('meta.about.title') }}
                </RouterLink>
              </li>
            </ul>
          </nav>

          <LanguageSwitcher />

          <button class="hamburger-button" @click="toggleMobileMenu" :class="{ 'hamburger-button--active': isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <Transition name="mobile-menu-transition">
          <nav v-if="isMobileMenuOpen" class="mobile-navbar">
            <ul>
              <li>
                <RouterLink
                  :to="`/${currentLocale}`"
                  active-class="active"
                  exact-active-class="active"
                  @click="closeMobileMenu"
                >
                  {{ $t('meta.home.title') }}
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="`/${currentLocale}/projects`"
                  active-class="active"
                  @click="closeMobileMenu"
                >
                  {{ $t('meta.projects.title') }}
                </RouterLink>
              </li>
              <li>
                <RouterLink
                  :to="`/${currentLocale}/about`"
                  active-class="active"
                  @click="closeMobileMenu"
                >
                  {{ $t('meta.about.title') }}
                </RouterLink>
              </li>
            </ul>
          </nav>
        </Transition>
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
  padding-left: $container-padding;
  padding-right: $container-padding - $scrollbar-width;
  margin: 0 auto;
}

.header {
  width: calc($container-width - 2 * $container-padding + $scrollbar-width);
  max-width: calc(100% - 2 * $container-padding);
  height: $header-height;
  padding: 0 1rem;

  position: fixed;
  top: $container-padding;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  transition: all 0.2s;

  &::before {
    content: '';
    display: block;

    width: 100%;
    height: $container-padding;

    position: fixed;
    bottom: 100%;
    left: 0;
    
    background: linear-gradient(to bottom, $color-background 25%, transparent);
  }

  &--scrolled {
    border-radius: 0.75rem;
    background-color: rgba($color-surface, 0.75);
    backdrop-filter: blur(1rem);
    box-shadow: inset 0 0 0 1px $color-border, 0 0 1rem rgba(0, 0, 0, 0.375);
  }

  &__right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
}

.logo {
  font-weight: 700;
  font-size: 1.5rem;

  &__highlight {
    color: $color-primary;
  }
}

.hamburger-button {
  width: 2rem;
  height: 2rem;

  display: none;
  position: relative;

  background: transparent;
  border: none;

  span {
    width: 100%;
    height: 2px;

    position: absolute;
    left: 0;

    background-color: $color-text;
    border-radius: 2px;

    transition: all 0.2s linear;

    &:nth-child(1) {
      top: 12.5%;
    }

    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }

    &:nth-child(3) {
      bottom: 12.5%;
    }
  }

  &--active span {
    &:nth-child(1) {
      top: 50%;
      transform: rotate(-45deg) translateY(-50%);
    }

    &:nth-child(2) {
      opacity: 0;
    }

    &:nth-child(3) {
      bottom: 50%;
      transform: rotate(45deg) translateY(50%);
    }
  }
}

.desktop-navbar, .mobile-navbar {
  ul {
    display: flex;
    list-style: none;

    li > a {
      text-decoration: none;
    }
  }
}

.desktop-navbar {
  display: block;

  ul {
    flex-direction: row;
    gap: 1rem;

    li > a {
      letter-spacing: 0.5px;
      color: $color-muted;
      transition: all 0.2s;

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

.mobile-navbar {
  margin-top: 0.5rem;
  padding: 1rem;
  width: 100%;

  display: none;

  position: absolute;
  right: 0;
  top: 100%;

  border-radius: 0.75rem;
  background-color: rgba($color-surface, 0.98);
  box-shadow: inset 0 0 0 1px $color-border, 0 0 1rem rgba(0, 0, 0, 0.375);

  ul {
    flex-direction: column;
    gap: 0.5rem;

    li > a {
      padding: 0.75rem 1rem;
      display: block;

      letter-spacing: 0.5px;
      border-radius: 0.5rem;
      color: $color-primary;

      transition: all 0.2s;

      &.active {
        color: $color-text;
        font-weight: 700;
        background-color: rgba($color-primary-dark, 0.75);
        border: 1px solid $color-primary-dark;
        pointer-events: none;
      }

      &:hover {
        background-color: rgba($color-primary-dark, 0.25);
      }
    }
  }
}

.backdrop {
  width: 100%;
  height: 100vh;

  display: none;

  position: fixed;
  top: 0;
  left: 0;
  
  backdrop-filter: brightness(50%);
}

.content {
  z-index: auto;
}

// **** TRANSITIONS ****

.mobile-menu-transistion {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
    transform: translateY(-1rem);
  }
}

.backdrop-transition {
  &-enter-active,
  &-leave-active {
    transition: all 0.3s ease;
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

// **** RESPONSIVE LAYOUT ****

@media (max-width: 768px) {
  .desktop-navbar {
    display: none;
  }

  .hamburger-button, .backdrop, .mobile-navbar {
    display: block;
  }
}
</style>