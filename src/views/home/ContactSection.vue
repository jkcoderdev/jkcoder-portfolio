<script setup>
import ButtonPrimary from '@/components/button/ButtonPrimary.vue';
</script>

<template>
  <section class="contact-section">
    <div class="content">
      <h2>Contact Me</h2>
      <p class="intro">I'm always open to new opportunities and interesting projects. Feel free to reach out!</p>
      <div class="contact-info">
        <div class="info-item">
          <h3>Email</h3>
          <a href="mailto:contact@jkcoder.eu">contact@jkcoder.eu</a>
        </div>
        <div class="info-item">
          <h3>Phone</h3>
          <a href="tel:+420123456789">+420 123 456 789</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-section {
  width: 100%;
  padding: 4rem 0;
  background: linear-gradient(to bottom, transparent, rgba($color-primary, 0.05));

  .content {
    width: $content-width;
    max-width: 100%;
    margin: 0 auto;
    padding: $content-padding;
    text-align: center;
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    background: linear-gradient(to right, $color-primary, $color-primary-light);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: 700;
  }

  .intro {
    width: 420px;
    max-width: 100%;
    margin: 0 auto;
    color: $color-muted;
    margin-bottom: 2rem;
    line-height: 1.6;
  }

  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: fit-content;
    margin: 0 auto;

    .info-item {
      h3 {
        font-weight: 600;
        font-size: 1rem;
        color: $color-text;
        margin-bottom: 0.25rem;
      }

      a {
        color: $color-primary-light;
        text-decoration: none;
        transition: color 0.2s;
        font-size: 1rem;
        font-weight: 600;

        &:hover {
          color: $color-primary;
          text-shadow: 0 0 0.5rem rgba($color-primary, 0.5);
        }
      }
    }
  }
}
</style>