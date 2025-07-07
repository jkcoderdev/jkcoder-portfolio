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
      <header class="header" :class="{ 'scrolled': scrolled }">
        <div class="logo">
          jkcoder<span class="highlight">.eu</span>
        </div>

        <div class="header-right">
          <!-- Desktop Navigation -->
          <nav class="navbar desktop-nav">
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

          <!-- Desktop Language Switcher -->
          <div class="desktop-lang">
            <LanguageSwitcher />
          </div>

          <!-- Mobile Menu Button -->
          <button class="mobile-menu-button" @click="toggleMobileMenu" :class="{ 'active': isMobileMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        <!-- Mobile Navigation -->
        <Transition name="mobile-menu">
          <div v-if="isMobileMenuOpen" class="mobile-nav">
            <nav class="mobile-navbar">
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
            
            <div class="mobile-lang">
              <LanguageSwitcher />
            </div>
          </div>
        </Transition>
      </header>

      <main class="content">
        <RouterView />
      </main>    
    </div>

    <!-- Mobile menu backdrop -->
    <Transition name="backdrop">
      <div v-if="isMobileMenuOpen" class="mobile-backdrop" @click="closeMobileMenu"></div>
    </Transition>
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
  z-index: 1000;

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

  .desktop-nav {
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

  .mobile-menu-button {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;

    span {
      width: 100%;
      height: 2px;
      background-color: $color-text;
      border-radius: 1px;
      transition: all 0.3s ease;
      transform-origin: center;
    }

    &.active {
      span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
      }
    }
  }

  .mobile-nav {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba($color-surface, 0.95);
    backdrop-filter: blur(1rem);
    border: 1px solid $color-border;
    border-top: none;
    border-radius: 0 0 0.75rem 0.75rem;
    padding: 1rem;
    z-index: 999;

    .mobile-navbar {
      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        margin-bottom: 1rem;

        li > a {
          display: block;
          padding: 0.75rem 1rem;
          text-decoration: none;
          letter-spacing: 0.5px;
          color: $color-muted;
          border-radius: 0.5rem;
          transition: all 0.2s;

          &.active {
            color: $color-text;
            font-weight: 700;
            background-color: rgba($color-primary, 0.1);
            border: 1px solid rgba($color-primary, 0.2);
          }

          &:hover:not(.active) {
            color: $color-text;
            background-color: $color-card;
          }
        }
      }
    }

    .mobile-lang {
      padding-top: 1rem;
      border-top: 1px solid $color-border;
      display: flex;
      justify-content: center;
    }
  }
}

.mobile-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(2px);
  z-index: 998;
}

.content {
  z-index: auto;
}

// Mobile menu transitions
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-1rem);
}

.backdrop-enter-active,
.backdrop-leave-active {
  transition: all 0.3s ease;
}

.backdrop-enter-from,
.backdrop-leave-to {
  opacity: 0;
}

// Responsive design
@media (max-width: 768px) {
  .header {
    .desktop-nav,
    .desktop-lang {
      display: none;
    }

    .mobile-menu-button {
      display: flex;
    }

    .logo {
      font-size: 1.25rem;
    }
  }
}

@media (min-width: 769px) {
  .mobile-menu-button {
    display: none !important;
  }

  .mobile-nav {
    display: none !important;
  }
}
</style>