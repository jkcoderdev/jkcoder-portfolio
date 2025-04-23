<script setup>
import ScrollingBlocks from '@/components/animation/ScrollingBlocks.vue';
</script>

<template>
  <section class="skills-section">
    <div class="content">
      <h2>Skills & Expertise</h2>

      <div class="cards">
        <div class="card">
          <h3>Languages</h3>
          <ScrollingBlocks
            :speed="0.375"
            :values="['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'Dart']" />
        </div>

        <div class="card">
          <h3>Frameworks</h3>
          <ScrollingBlocks
            :speed="0.5"
            :values="['Laravel', 'Vue', 'Flutter']" />
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills-section {
  width: 100%;
  padding: 6rem 0;
  background: linear-gradient(to bottom, transparent, rgba($color-primary, 0.05));

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
    margin-bottom: 3rem;
    background: linear-gradient(to right, $color-primary, $color-primary-light);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: $color-text;
    font-weight: 600;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  .card {
    width: $card-width;
    max-width: 100%;
    padding: $card-padding;
    background-color: $color-card;
    backdrop-filter: blur(10px);
    border: 1px solid $color-border;
    border-radius: $card-padding;
    box-shadow: 
      0 0 2rem rgba(0, 0, 0, 0.2),
      0 0 0.5rem rgba($color-primary, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    .scrolling-container {
      position: relative;

      &::before, &::after {
        content: '';
        display: block;
        width: 2rem;
        height: 100%;
        position: absolute;
        top: 0;
        pointer-events: none;
        z-index: 1;
      }

      &::before {
        left: 0;
        background: linear-gradient(to right, $color-card, transparent);
      }

      &::after {
        right: 0;
        background: linear-gradient(to left, $color-card, transparent);
      }
    }
  }
}
</style>