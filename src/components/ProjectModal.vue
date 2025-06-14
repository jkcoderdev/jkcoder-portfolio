<script setup>
import { computed, onMounted, onUnmounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  isOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['close']);

const router = useRouter();
const route = useRoute();

const closeModal = () => {
  emit('close');
  // Go back in history to remove the modal route
  if (window.history.length > 1) {
    router.go(-1);
  } else {
    router.push('/projects');
  }
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

// Prevent body scroll when modal is open
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
});

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
        v-if="isOpen" 
        class="modal-backdrop" 
        @click="handleBackdropClick"
      >
        <div class="modal-container">
          <div class="modal-header">
            <h1>{{ project.name }}</h1>
            <button class="close-button" @click="closeModal">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          <div class="modal-content">
            <div class="project-image">
              <img :src="project.screenshot" :alt="project.name" />
            </div>
            
            <div class="project-info">
              <div class="description">
                <h2>Description</h2>
                <p>{{ project.shortDescription }}</p>
              </div>
              
              <div class="technologies">
                <h2>Technologies Used</h2>
                <div class="tech-tags">
                  <span class="tech-tag" v-for="tech in project.tech" :key="tech">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  z-index: 1000;
  
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 1rem;
}

.modal-container {
  width: 100%;
  max-width: 900px;
  max-height: 80vh;
  background-color: $color-surface;
  border-radius: 1rem 1rem 0 0;
  border: 1px solid $color-border;
  box-shadow: 0 -4px 2rem rgba(0, 0, 0, 0.3);
  
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  padding: 1.5rem;
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
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.project-image {
  width: 100%;
  max-height: 300px;
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid $color-border;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  }
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  padding: 0.5rem 0.75rem;
  background-color: rgba($color-primary, 0.1);
  color: $color-primary-light;
  border: 1px solid rgba($color-primary, 0.2);
  border-radius: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
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
  .modal-backdrop {
    padding: 0;
  }
  
  .modal-container {
    max-height: 90vh;
    border-radius: 1rem 1rem 0 0;
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
</component>