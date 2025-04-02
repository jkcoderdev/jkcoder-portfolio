<script setup>
</script>

<template>
  <main class="profile">
    <section class="profile-header">
      <div class="profile-info">
        <h1>Jan Kozaruk</h1>
        <h2>Full-stack developer</h2>
        <p class="muted">🇵🇱 Poland • Speaks English, Polish</p>
      </div>
    </section>

    <section class="about">
      <p>
        I'm a full-stack developer with expertise in building modern and efficient web applications.
        I focus on writing clean, maintainable code and delivering high-quality solutions.
      </p>
    </section>

    <section class="tech-stack">
      <h2>Tech Stack</h2>
      <div class="stack">
        <div class="stack-group">
          <h3>Languages</h3>
          <ul>
            <li>🔹 HTML, CSS/SCSS</li>
            <li>🔹 JavaScript/TypeScript</li>
            <li>🔹 PHP/MySQL</li>
            <li>🔹 Python</li>
          </ul>
        </div>
        <div class="stack-group">
          <h3>Frameworks</h3>
          <ul>
            <li>🔹 Laravel</li>
            <li>🔹 Vue 3</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="contact">
      <p>Let's bring your ideas to life! 🚀</p>
      <button class="btn btn-primary">Contact Me</button>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 2rem;
  text-align: center;
}

.profile-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid $color-primary;
}

.profile-info {
  h2 {
    letter-spacing: 0;
    font-weight: 400;
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
  }
}

.stack {
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  .stack-group {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    ul {
      list-style: none;
      padding-left: 0;

      li {
        font-size: 1rem;
      }
    }
  }
}

.contact {
  margin-top: 4rem;
}
</style>
