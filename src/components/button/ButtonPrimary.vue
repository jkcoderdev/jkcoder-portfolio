<template>
    <button class="btn-primary"><slot /></button>
</template>

<style lang="scss" scoped>
.btn-primary {
    height: 2.5rem;
    padding: 0 1rem;

    font-size: 1rem;
    color: $color-surface;
    background-color: $color-primary;
    border: 1px solid $color-border;
    box-shadow: 0 0 0.25rem rgba(255, 255, 255, 0.25);
    border-radius: 0.5rem;
    transition: 0.2s;

    &:hover {
        box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.25), inset 0 0 0.5rem rgba(255, 255, 255, 0.25), inset 0 0 0 2px $color-primary;
        background-color: rgba($color-primary, 0);
        color: $color-primary;
    }
}
</style>
