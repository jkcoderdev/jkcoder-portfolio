<script setup>
import ButtonPrimary from '@/components/button/ButtonPrimary.vue';
</script>

<template>
  <section class="main-section">
    <div class="content">
      <h1>Jan Kozaruk</h1>
      <h2>Full-Stack Developer</h2>
      <p>
        I'm a software developer with expertise in building modern and efficient web applications. I focus on writing clean, maintainable code and delivering high-quality solutions.
      </p>
      <ButtonPrimary>Get in touch</ButtonPrimary>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.main-section {
  width: 100%;
  min-height: calc(100vh - $header-height);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 30rem;
    height: 30rem;
    background: radial-gradient(circle, rgba($color-primary, 0.1) 0%, transparent 70%);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 0;
  }

  .content {
    width: $content-width;
    max-width: 100%;
    padding: $content-padding;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-size: 5rem;
    font-weight: 800;
    background: linear-gradient(to right, $color-primary, $color-primary-light);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
    line-height: 1.1;
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  p {
    max-width: 540px;
    line-height: 1.7;
    color: $color-muted;
    margin-bottom: 2.5rem;
    font-size: 1.125rem;
  }
}
</style>