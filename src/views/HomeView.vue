<script setup>
</script>

<template>
  <main>
    <h2>Color Palette</h2>
    <div class="colors">
      <div class="colors-row">
        <div class="color-box primary">Primary</div>
        <div class="color-box primary-dark">Primary Dark</div>
        <div class="color-box primary-light">Primary Light</div>
      </div>
      
      <div class="colors-row">
        <div class="color-box secondary">Secondary</div>
        <div class="color-box secondary-dark">Secondary Dark</div>
        <div class="color-box secondary-light">Secondary Light</div>
      </div>

      <div class="colors-row">
        <div class="color-box success">Success</div>
        <div class="color-box danger">Danger</div>
        <div class="color-box warning">Warning</div>
        <div class="color-box info">Info</div>
      </div>

      <div class="colors-row">
        <div class="color-box background">Background</div>
        <div class="color-box surface">Surface</div>
        <div class="color-box text">Text</div>
        <div class="color-box border">Border</div>
        <div class="color-box muted">Muted</div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  background-color: $color-background;
  color: $color-text;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
}

.colors {
  margin-top: 1rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  .colors-row {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    gap: 0.5rem;
  }
}

.color-box {
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  font-weight: bold;
  color: $color-surface;
  display: grid;
  place-items: center;
}

// Apply background colors
.primary { background-color: $color-primary; }
.primary-dark { background-color: $color-primary-dark; }
.primary-light { background-color: $color-primary-light; }
.secondary { background-color: $color-secondary; }
.secondary-dark { background-color: $color-secondary-dark; }
.secondary-light { background-color: $color-secondary-light; }
.success { background-color: $color-success; }
.danger { background-color: $color-danger; }
.warning { background-color: $color-warning; }
.info { background-color: $color-info; }
.background { background-color: $color-background; color: $color-text; border: 1px solid $color-border; }
.surface { background-color: $color-surface; color: $color-text; }
.text { background-color: $color-text; color: $color-background; }
.border { background-color: $color-border; }
.muted { background-color: $color-muted; }
</style>
