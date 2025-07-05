<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import content from '@/content';

const route = useRoute();
const router = useRouter();

const supportedLocales = Object.keys(content);
const currentLocale = computed(() => route.params.locale || 'en');

const isDropdownOpen = ref(false);

const selectLanguage = (langCode) => {
  if (!route.name) return;

  router.push({
    name: route.name,
    params: { ...route.params, locale: langCode },
    query: route.query,
  }).then(() => {
    location.reload();
  });

  isDropdownOpen.value = false;
};

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const closeDropdown = () => {
  isDropdownOpen.value = false;
};

// Handle clicks outside dropdown
const handleClickOutside = (event) => {
  if (!event.target.closest('.language-switcher')) {
    closeDropdown();
  }
};

// Handle escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && isDropdownOpen.value) {
    closeDropdown();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleEscape);
});
</script>

<template>
  <div class="language-switcher">
    <button class="language-button" @click="toggleDropdown" :class="{ 'active': isDropdownOpen }">
      <component :is="content[currentLocale].flag" class="flag" />
      <svg 
        class="arrow" 
        :class="{ 'rotated': isDropdownOpen }"
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2"
      >
        <polyline points="6,9 12,15 18,9"></polyline>
      </svg>
    </button>

    <Transition name="dropdown">
      <div v-if="isDropdownOpen" class="dropdown">
        <button
          v-for="code in supportedLocales"
          :key="code"
          class="dropdown-item"
          :class="{ 'selected': code === currentLocale }"
          @click="selectLanguage(code)"
        >
          <component :is="content[code].flag" class="flag" />
          <span class="name">{{ content[code].languageName }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
.language-switcher {
  position: relative;
}

.language-button {
  height: 2.5rem;
  padding: 0 0.75rem;
  
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  background: none;
  border: 1px solid $color-border;
  border-radius: 0.5rem;
  color: $color-muted;
  cursor: pointer;
  
  transition: all 0.2s ease;
  
  &:hover, &.active {
    background-color: $color-card;
    color: $color-text;
    border-color: $color-primary;
  }
  
  .flag {
    height: 1.125rem;
  }
  
  .arrow {
    width: 1rem;
    height: 1rem;
    transition: transform 0.2s ease;
    
    &.rotated {
      transform: rotate(180deg);
    }
  }
}

.dropdown {
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  min-width: 140px;
  
  background-color: $color-surface;
  border: 1px solid $color-border;
  border-radius: 0.75rem;
  box-shadow: 0 4px 1rem rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(1rem);
  
  overflow: hidden;
  z-index: 100;
}

.dropdown-item {
  width: 100%;
  padding: 0.75rem 1rem;
  
  display: flex;
  align-items: center;
  gap: 0.75rem;
  
  background: none;
  border: none;
  color: $color-muted;
  cursor: pointer;
  
  transition: all 0.2s ease;
  
  &:hover {
    background-color: $color-card;
    color: $color-text;
  }
  
  &.selected {
    background-color: rgba($color-primary, 0.1);
    color: $color-primary-light;
  }
  
  .flag {
    height: 1rem;
  }
  
  .name {
    font-size: 0.9rem;
    font-weight: 500;
  }
}

// Dropdown transitions
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.5rem);
}

.dropdown-enter-to,
.dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>