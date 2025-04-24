<script setup>
const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with real-time inventory management',
    image: 'https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg',
    tags: ['Vue.js', 'Laravel', 'PostgreSQL']
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg',
    tags: ['React', 'Node.js', 'WebSocket']
  },
  {
    title: 'Fitness Tracker',
    description: 'Mobile app for tracking workouts and nutrition',
    image: 'https://images.pexels.com/photos/1749303/pexels-photo-1749303.jpeg',
    tags: ['Flutter', 'Firebase']
  }
];
</script>

<template>
  <section class="projects-section">
    <div class="content">
      <h2>Projects</h2>
      <div class="projects-grid">
        <div v-for="(project, index) in projects" :key="index" class="project-card">
          <div class="image" :style="{ backgroundImage: `url(${project.image})` }"></div>
          <div class="details">
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="tags">
              <span v-for="(tag, tagIndex) in project.tags" :key="tagIndex" class="tag">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects-section {
  width: 100%;
  padding: 4rem 0;

  .content {
    width: $content-width;
    max-width: 100%;
    margin: 0 auto;
    padding: $content-padding;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 2rem;
    background: linear-gradient(to right, $color-primary, $color-primary-light);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  .project-card {
    background-color: $color-card;
    border: 1px solid $color-border;
    border-radius: $card-padding;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 
      0 0 2rem rgba(0, 0, 0, 0.2),
      0 0 0.5rem rgba($color-primary, 0.1);

    &:hover {
      transform: translateY(-0.5rem);
      box-shadow: 
        0 1rem 2rem rgba(0, 0, 0, 0.3),
        0 0 1rem rgba($color-primary, 0.2);
    }

    .image {
      width: 100%;
      height: 200px;
      background-size: cover;
      background-position: center;
      border-bottom: 1px solid $color-border;
    }

    .details {
      padding: $card-padding;

      h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
        color: $color-primary-light;
      }

      p {
        color: $color-muted;
        margin-bottom: 1rem;
        line-height: 1.6;
      }

      .tags {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;

        .tag {
          background-color: rgba($color-primary, 0.1);
          color: $color-primary-light;
          padding: 0.25rem 0.75rem;
          border-radius: 1rem;
          font-size: 0.875rem;
        }
      }
    }
  }
}
</style>