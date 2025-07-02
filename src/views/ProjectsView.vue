<script setup>
import { ref } from 'vue';
import ProjectDetailsModal from '@/components/ProjectDetailsModal.vue';
import projects from '@/data/projects';

const selectedProject = ref(null);
const isModalOpen = ref(false);

const openProjectModal = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  selectedProject.value = null;
};
</script>

<template>
    <section class="projects-section">
        <h1>My Projects</h1>
        <p class="description">Here's a collection of projects I've worked on. Each project represents different skills and technologies I've used throughout my journey.</p>

        <div class="projects-grid">
            <div 
                class="project-card" 
                v-for="project in projects" 
                :key="project.id"
                @click="openProjectModal(project)"
            >
                <div class="thumbnail">
                    <img :src="project.screenshot" :alt="$t('projects.' + project.id + '.name')" />
                </div>
                <div class="content">
                    <h2>{{ $t('projects.' + project.id + '.name') }}</h2>
                    <p>{{ $t('projects.' + project.id + '.shortDescription') }}</p>
                    <div class="tech-block" v-for="techBlock in project.tech" :key="techBlock">{{ techBlock }}</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Project Details Modal -->
    <ProjectDetailsModal 
      :project="selectedProject"
      :isOpen="isModalOpen"
      @close="closeModal"
    />
</template>

<style lang="scss" scoped>
.projects-section {
    margin-top: $container-padding + $header-height;
    padding: 2rem 1rem;
    text-align: center;

    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 1rem;
    }

    .description {
        max-width: 600px;
        margin: 0 auto 2rem;
        color: $color-muted;
        line-height: 1.5;
    }

    .projects-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1.5rem;
        padding: 1rem 0;
    }

    .project-card {
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: $color-card;
        border-radius: 1rem;
        border: 1px solid $color-border;
        overflow: hidden;
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            transform: translateY(-2px);
            background-color: $color-card-hover;
            border-color: $color-primary;

            .thumbnail img {
                transform: scale(1.05);
            }
        }

        .thumbnail {
            width: 100%;
            height: 200px;
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.3s ease;
            }
        }

        .content {
            flex: 1;
            padding: 1.5rem;
            text-align: left;

            h2 {
                font-size: 1.25rem;
                font-weight: 700;
                color: $color-primary-light;
                margin-bottom: 0.75rem;
            }

            p {
                margin-bottom: 1rem;
                line-height: 1.5;
                color: $color-text;
            }

            .tech-block {
                padding: 0.25rem 0.5rem;
                display: inline-block;
                font-size: 0.9rem;
                background-color: rgba($color-primary, 0.1);
                color: $color-muted;
                border-radius: 0.25rem;
                margin: 0.25rem;
            }
        }
    }
}
</style>