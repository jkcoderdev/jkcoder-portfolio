<script setup>
const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Solutions',
    period: '2021 - Present',
    description: 'Led development of enterprise-level web applications using Vue.js and Laravel. Managed a team of 5 developers and implemented CI/CD pipelines.'
  },
  {
    title: 'Full Stack Developer',
    company: 'Digital Innovations Ltd',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple client projects using Vue.js, Node.js, and PostgreSQL. Improved application performance by 40%.'
  },
  {
    title: 'Junior Web Developer',
    company: 'WebStart Agency',
    period: '2017 - 2019',
    description: 'Created responsive websites for clients using modern web technologies. Collaborated with designers to implement pixel-perfect designs.'
  }
];
</script>

<template>
  <section class="work-section">
    <div class="content">
      <h2>Work Experience</h2>
      <div class="timeline">
        <div v-for="(exp, index) in experiences" :key="index" class="experience-card">
          <div class="period">{{ exp.period }}</div>
          <div class="details">
            <h3>{{ exp.title }}</h3>
            <h4>{{ exp.company }}</h4>
            <p>{{ exp.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work-section {
  width: 100%;
  padding: 4rem 0;
  background: linear-gradient(to bottom, rgba($color-primary, 0.05), transparent);

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

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: $card-width;
    margin: 0 auto;
  }

  .experience-card {
    background-color: $color-card;
    border: 1px solid $color-border;
    border-radius: $card-padding;
    padding: $card-padding;
    position: relative;
    box-shadow: 
      0 0 2rem rgba(0, 0, 0, 0.2),
      0 0 0.5rem rgba($color-primary, 0.1);

    .period {
      position: absolute;
      top: -0.75rem;
      right: $card-padding;
      background: $color-primary;
      padding: 0.25rem 1rem;
      border-radius: 1rem;
      font-size: 0.875rem;
      font-weight: 500;
    }

    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: $color-primary-light;
    }

    h4 {
      font-size: 1rem;
      color: $color-muted;
      margin-bottom: 1rem;
    }

    p {
      color: $color-muted;
      line-height: 1.6;
    }
  }
}
</style>