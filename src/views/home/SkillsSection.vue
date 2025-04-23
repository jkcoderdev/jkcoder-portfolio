<script setup>
import ScrollingBlocks from '@/components/animation/ScrollingBlocks.vue';
</script>

<template>
  <section class="skills-section">
    <h2>Skills</h2>

    <div class="card">
      <h3>Languages</h3>
      <ScrollingBlocks
        :values="['HTML', 'CSS', 'SCSS', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'Dart']" />
    </div>

    <div class="card">
      <h3>Frameworks</h3>
      <ScrollingBlocks
        :values="['Laravel', 'Vue', 'Flutter']" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills-section {
  width: $content-width;

  margin: 0 auto;
  padding: $content-padding;

  h2 {
    text-align: center;
    font-size: 2rem;
    line-height: 1.5;
  }
  
  h3 {
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
  }

  .card {
    margin: 0 auto;
    margin-top: 1.5rem;
    padding: $card-padding;

    width: $card-width;
    max-width: 100%;
    
    background-color: $color-surface;
    border: 1px solid $color-border;
    border-radius: $card-padding * 0.5;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.125);

    .scrolling-container {
      position: relative;

      &::before, &::after {
        content: '';
        display: block;
        width: 1rem;
        height: 100%;
        position: absolute;
        top: 0;
        pointer-events: none;
        z-index: 1;
      }

      &::before {
        left: 0;
        background: linear-gradient(to right, $color-surface, transparent);
      }

      &::after {
        right: 0;
        background: linear-gradient(to left, $color-surface, transparent);
      }
    }
  }
}
</style>
