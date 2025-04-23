<script setup>
import { RouterLink } from 'vue-router';

defineProps({
    route: {
        type: String,
        required: true
    }
});
</script>

<template>
    <RouterLink class="nav-link" :to="{ name: route }"><slot /></RouterLink>
</template>

<style lang="scss" scoped>
.nav-link {
    // text-transform: uppercase;
    text-decoration: none;
    color: $color-text;
    // font-weight: 500;
    // letter-spacing: 0.5px;
    font-size: 1rem;
    transition: 0.2s;

    &:hover {
        text-shadow: 0 0 0.5rem $color-primary-light;
        color: $color-primary-light;
    }
}
</style>
