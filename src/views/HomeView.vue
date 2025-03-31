<script setup>
</script>

<template>
  <main>
    <h2>Website UI Showcase</h2>

    <section class="buttons">
      <button class="btn btn-primary">Primary</button>
      <button class="btn btn-secondary">Secondary</button>
      <button class="btn btn-danger">Danger</button>
    </section>

    <section>
      <h1>Main Heading (H1)</h1>
      <h2>Subheading (H2)</h2>
      <p>
        This is a paragraph using the primary text color. It should be easy to read against the dark background.
      </p>
      <p class="muted">
        This is a muted paragraph for less important text.
      </p>
    </section>

    <section class="cards">
      <div class="card">
        <h3>Card Title</h3>
        <p>This is a card component with a surface background.</p>
      </div>

      <div class="card border">
        <h3>Bordered Card</h3>
        <p>This card has a border using the border color.</p>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 4rem 2rem;
  text-align: center;
}

/* General spacing */
section {
  margin-top: 3rem;
}

.success { background-color: $color-success; }
.danger { background-color: $color-danger; }
.warning { background-color: $color-warning; }
.info { background-color: $color-info; }

/* Cards */
.cards {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  .card {
    width: 280px;
  }
}
</style>
