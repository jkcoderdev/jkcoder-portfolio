<script setup>
</script>

<template>
  <main>
    <section class="profile">
      <h1>Jan Kozaruk</h1>
      <h2>Full-stack developer</h2>
      <p class="muted">🇵🇱 Poland • Speaks English, Polish</p>
    </section>

    <section class="about">
      <p>
        I'm a full-stack developer with expertise in building modern and efficient web applications.
        I focus on writing clean, maintainable code and delivering high-quality solutions.
      </p>
    </section>

    <section class="tech-stack">
      <h2>Tech Stack</h2>
      <div class="stack-group">
        <h3>Languages</h3>
        <ul>
          <li>HTML, CSS/SCSS</li>
          <li>JavaScript/TypeScript</li>
          <li>PHP/MySQL</li>
          <li>Python</li>
        </ul>
      </div>
      <div class="stack-group">
        <h3>Frameworks</h3>
        <ul>
          <li>Laravel</li>
          <li>Vue 3</li>
        </ul>
      </div>
    </section>

    <section class="contact">
      <p>Let's bring your ideas to life! 🚀</p>
      <button class="btn btn-primary">Contact Me</button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;
}

.profile {  
  h2 {
    font-weight: 500;
    color: $color-primary-light;
  }

  p {
    font-size: 1rem;
  }
}

.about, .tech-stack {
  width: 100%;
  max-width: 800px;
  margin-top: 3rem;
  text-align: left;
}

.about {
  p {
    text-align: center;
    margin: 0 auto;
    max-width: 480px;
  }
}

.tech-stack {
  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .stack-group {
    h3 {
      text-align: center;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    ul {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      list-style: none;
      padding-left: 0;

      li {
        font-size: 1rem;

        &:not(:last-of-type)::after {
          content: '🔹';
          margin: 0 0.25rem;
        }
      }
    }

    &:not(:last-of-type) {
      margin-bottom: 1.5rem;
    }
  }
}

.contact {
  margin-top: 4rem;
}
</style>
