<script setup>
import ButtonPrimary from '@/components/button/ButtonPrimary.vue';
</script>

<template>
  <section class="main-section">
    <h1>Jan Kozaruk</h1>
    <h2>Full-Stack Developer</h2>
    <p>
      I'm a software developer with expertise in building modern and efficient web applications. I focus on writing clean, maintainable code and delivering high-quality solutions.
    </p>
    <ButtonPrimary>Get in touch</ButtonPrimary>
  </section>
</template>

<style lang="scss" scoped>
.main-section {
  width: $content-width;

  margin: 0 auto;
  padding: $content-padding;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 4rem;
    color: $color-primary;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  p {
    max-width: 480px;
    line-height: 1.5rem;
    color: $color-muted;
    margin-bottom: 1.5rem;
  }
}
</style>
