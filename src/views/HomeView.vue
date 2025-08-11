<script setup>
import { ref } from 'vue';
import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';

import EmailMaterialIcon from '@material-design-icons/svg/round/alternate_email.svg';
import GithubIcon from '@/icons/github.svg';
import CodePenIcon from '@/icons/codepen.svg';
import ProjectDetailsModal from '@/components/ProjectDetailsModal.vue';

import projects from '@/data/projects';

const RECENT_PROJECTS_LIMIT = 3;
const recentProjects = projects.slice(0, RECENT_PROJECTS_LIMIT);

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

const { locale, t } = useI18n();

useHead({
  title: 'Jan Kozaruk - ' + t('meta.home.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.home.description')
    },
    {
      property: 'og:title',
      content: t('meta.home.title')
    },
    {
      property: 'og:description',
      content: t('meta.home.description')
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      rel: 'canonical',
      href: `https://jkcoder.eu/${locale}/`
    }
  ]
});
</script>

<template>
  <section class="start-section">
    <h1>Jan Kozaruk</h1>
    <h2>{{ $t('general.subtitle') }}</h2>

    <p class="description">
        {{ $t('general.shortDescription') }}
    </p>

    <div class="socials">
        <a href="https://github.com/jkcoderdev" target="_blank">
            <GithubIcon class="icon" />
        </a>
        <a href="https://codepen.io/jan-kozaruk" target="_blank">
            <CodePenIcon class="icon" />
        </a>
    </div>

    <a href="#contact">
        <button class="primary-button">{{ $t('general.contactButton') }}</button>
    </a>
  </section>

  <div class="divider"></div>

  <section class="skills-section">
    <h1>{{ $t('general.sections.skills.title') }}</h1>
    
    <div class="skills-container">
      <div class="skill-category">
        <h2>{{ $t('general.sections.skills.languages') }}</h2>
        <div class="skill-tags">
          <span class="skill-tag">HTML</span>
          <span class="skill-tag">CSS</span>
          <span class="skill-tag">SCSS</span>
          <span class="skill-tag">JavaScript</span>
          <span class="skill-tag">TypeScript</span>
          <span class="skill-tag">PHP</span>
          <span class="skill-tag">Python</span>
          <span class="skill-tag">C++</span>
        </div>
      </div>

      <div class="skill-category">
        <h2>{{ $t('general.sections.skills.frameworks') }}</h2>
        <div class="skill-tags">
          <span class="skill-tag">Laravel</span>
          <span class="skill-tag">Vue</span>
          <span class="skill-tag">Angular</span>
          <span class="skill-tag">Flutter</span>
        </div>
      </div>
      
      <div class="skill-category">
        <h2>{{ $t('general.sections.skills.tools') }}</h2>
        <div class="skill-tags">
          <span class="skill-tag">Git</span>
          <span class="skill-tag">Node.js</span>
          <span class="skill-tag">WSL</span>
          <span class="skill-tag">Ubuntu</span>
          <span class="skill-tag">VSCode</span>
          <span class="skill-tag">Android Studio</span>
        </div>
      </div>
    </div>
  </section>

  <div class="divider"></div>

  <section class="projects-section">
    <h1>{{ $t('general.sections.projects.title') }}</h1>

    <div class="projects">
        <div class="project-card" v-for="project in recentProjects" :key="project.id" @click="openProjectModal(project)">
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

    <RouterLink :to="`/${locale}/projects`">
        <button class="primary-button">{{ $t('general.sections.projects.moreButton') }}</button>
    </RouterLink>
  </section>

  <div class="divider"></div>

  <section class="contact-section" id="contact">
    <h1>{{ $t('general.sections.contact.title') }}</h1>

    <div class="item">
        <div class="icon-box">
            <EmailMaterialIcon class="icon" />
        </div>

        <a href="mailto:kontakt@jkcoder.eu">kontakt@jkcoder.eu</a>
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
.divider {
    margin: 0 auto;
    width: 240px;
    height: 1px;
    background-color: $color-border;
}

.primary-button {
    padding: 0 1rem;
    height: 2.25rem;

    background-color: $color-primary;
    color: $color-background;
    border: none;
    box-shadow: inset 0 0 0 2px $color-primary, 0 0 0.5rem -0.125rem $color-primary-light;
    font-size: 1rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    border-radius: 0.5rem;
    transition: 0.2s;
    
    cursor: pointer;

    &:hover {
        background-color: transparent;
        color: $color-primary;
        box-shadow: inset 0 0 0 2px $color-primary, 0 0 0.5rem 0 $color-primary-light;
    }
}

.start-section {
    padding-top: $container-padding + $header-height + 4rem;
    padding-bottom: 4rem;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;
    background-image: radial-gradient($color-primary, tranparent);

    h1 {
        font-size: 5rem;
        line-height: 6rem;
        font-weight: 900;
        letter-spacing: 1px;
    }

    h2 {
        font-size: 1.5rem;
        line-height: 1;
        color: $color-primary;
    }

    .description {
        margin-top: 1rem;
        width: 540px;
        max-width: 100%;
        color: $color-muted;
        letter-spacing: 0.25px;
    }

    .socials {
        margin: 2rem auto;
        width: fit-content;
        display: flex;
        gap: 1rem;

        .icon {
            width: 1.5rem;
            height: 1.5rem;
            color: $color-text;
            fill: currentColor;
            opacity: 0.75;

            transition: 0.2s ease-in-out;

            cursor: pointer;

            &:hover {
                opacity: 1;
            }
        }
    }
}

.skills-section {
    padding: 4rem 0;
    text-align: center;

    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 2rem;
    }

    .skills-container {
        margin: 0 auto;
        max-width: 100%;
        
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    .skill-category {
        h2 {
            font-size: 1.5rem;
            font-weight: 700;
            color: $color-primary-light;
            margin-bottom: 0.75rem;
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
        }

        .skill-tag {
            padding: 0 0.75rem;

            font-size: 0.95rem;
            line-height: 1.75rem;

            background-color: rgba($color-card, 0.75);
            color: rgba($color-text, 0.75);

            border-radius: 0.75rem;
            border: 1px solid $color-border;

            transition: all 0.3s ease;

            &:hover {
                color: $color-primary-light;
                border: 1px solid $color-primary-dark;
            }
        }
    }
}

.projects-section {
    padding: 4rem 0;
    text-align: center;

    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 2rem;
    }

    .projects {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .project-card {
        min-height: 180px;
        width: 800px;
        max-width: 100%;
        margin: 0 auto;

        display: flex;

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
            width: 280px;
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
                font-size: 1.5rem;
                font-weight: 700;
                color: $color-primary-light;
                margin-bottom: 1rem;
            }

            p {
                margin-bottom: 1rem;
                line-height: 1.5;
                color: $color-text;
            }

            .tech-block {
                padding: 0.25rem 0.5rem;
                display: inline-block;
                font-style: normal;
                font-size: 0.9rem;
                background-color: rgba($color-primary, 0.1);
                color: $color-muted;
                border-radius: 0.25rem;

                &:not(:last-of-type) {
                    margin-right: 0.5rem;
                }
            }
        }
    }

    .primary-button {
        margin-top: 2rem;
    }
}

.contact-section {
    padding: 4rem 0;
    text-align: center;

    h1 {
        font-size: 2rem;
        font-weight: 900;
        margin-bottom: 1.5rem;
    }

    .item {
        margin: 0 auto;
        width: 240px;
        max-width: 100%;

        display: flex;
        align-items: center;
        
        background-color: $color-card;

        border-radius: 1rem;
        border: 1px solid $color-border;

        .icon-box {
            padding: 0.5rem;
            border-right: 1px solid $color-border;

            .icon {
                width: 1.5rem;
                height: 1.5rem;

                display: block;

                color: $color-primary-light;
                fill: currentColor;
            }
        }

        a {
            margin: 0 1rem;
            padding: 0.5rem 0;

            text-decoration: none;
            color: $color-text;
            
            transition: 0.2s ease-in-out;

            &:hover {
                color: $color-primary-light;
            }
        }
    }
}
</style>