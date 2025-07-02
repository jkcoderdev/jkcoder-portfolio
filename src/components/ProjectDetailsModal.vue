<script setup>
import { watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  project: {
    type: Object,
    default: null
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const closeModal = () => {
  emit('close');
};

// Handle escape key
const handleEscape = (event) => {
  if (event.key === 'Escape' && props.isOpen) {
    closeModal();
  }
};

// Handle backdrop click
const handleBackdropClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
  document.body.style.overflow = '';
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div 
        v-if="isOpen && project" 
        class="modal-backdrop" 
        @click="handleBackdropClick"
      >
        <div class="modal-container">
          <div class="modal-header">
            <h1>{{ $t('projects.' + project.id + '.name') }}</h1>
            <button class="close-button" @click="closeModal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div class="modal-content">
            <img class="project-image" :src="project.screenshot" :alt="$t('projects.' + project.id + '.name')" />
            
            <div class="project-info">
              <div class="description">
                <h2>Description</h2>
                
                <p v-if="$t('projects.' + project.id + '.description')" v-html="$t('projects.' + project.id + '.description')"></p>
                <p v-else>{{ $t('projects.' + project.id + '.shortDescription') }}</p>

                <p v-if="project.repo">Source code: <a :href="project.repo" target="_blank">{{ project.repo }}</a></p>

                <p v-if="project.url">Website: <a :href="project.url" target="_blank">{{ project.url }}</a></p>
              </div>
              
              <div class="technologies">
                <h2>Main technologies</h2>
                <div class="tech-tags">
                  <div class="tech-block" v-for="tech in project.tech" :key="tech">
                    {{ tech }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss">
.description a {
  text-decoration: none;
  color: $color-primary;
  transition: 0.2s;

  &:hover {
    color: $color-primary-light;
  }
}
</style>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  padding-top: 4rem;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(1rem);
  z-index: 1;
}

.modal-container {
  width: 100%;
  height: 100%;
  background-color: $color-surface;
  border-radius: 1rem 1rem 0 0;
  
  display: flex;
  flex-direction: column;
  overflow: hidden;
  pointer-events: all;

  animation: glideIn 0.3s ease-in;
}

@keyframes glideIn {
  from {
    translate: 0 4rem;
  }

  to {
    translate: 0 0;
  }
}

.modal-header {
  padding: 1.5rem 2rem;
  border-bottom: 1px solid $color-border;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  h1 {
    font-size: 1.75rem;
    font-weight: 700;
    color: $color-primary-light;
    margin: 0;
  }
  
  .close-button {
    width: 2.5rem;
    height: 2.5rem;
    background: none;
    border: 1px solid $color-border;
    border-radius: 0.5rem;
    color: $color-muted;
    cursor: pointer;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    transition: all 0.2s ease;
    
    &:hover {
      background-color: $color-card;
      color: $color-text;
      border-color: $color-primary;
    }
  }
}

.modal-content {
  width: $container-width;
  max-width: 100%;
  margin: 0 auto;

  flex: 1;
  padding: 1.5rem 2rem;
  overflow-y: auto;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &::-webkit-scrollbar-track, &::-webkit-scrollbar-corner {
    background-color: $color-surface;
  }

  &::-webkit-scrollbar-thumb {
    border-color: $color-surface;
  }
}

.project-image {
  height: 360px;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 0.75rem;
  border: 1px solid $color-border;
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  h2 {
    font-size: 1.25rem;
    font-weight: 600;
    color: $color-text;
    margin-bottom: 0.75rem;
  }
  
  p {
    line-height: 1.6;
    color: $color-muted;
    margin: 0.5rem 0;
  }
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-block {
  padding: 0.25rem 0.5rem;
  display: inline-block;
  font-size: 0.9rem;
  background-color: rgba($color-primary, 0.1);
  color: $color-muted;
  border-radius: 0.25rem;
}

// Transitions
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  
  .modal-container {
    transform: translateY(100%);
  }
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  
  .modal-container {
    transform: translateY(0);
  }
}

// Responsive design
@media (max-width: 768px) {
  .modal-container {
    height: 90vh;
  }
  
  .modal-header {
    padding: 1rem;
    
    h1 {
      font-size: 1.5rem;
    }
  }
  
  .modal-content {
    padding: 1rem;
  }
}
</style>