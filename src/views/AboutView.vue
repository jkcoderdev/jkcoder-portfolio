<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { getLocaleMessage, locale } = useI18n();

const paragraphs = computed(() => {
    const messages = getLocaleMessage(locale.value);
    return messages.about.paragraphs;
});
</script>

<template>
    <section class="about-section">
        <h1>{{ $t('about.heading') }}</h1>
        <p v-for="paragraph of paragraphs">{{ paragraph }}</p>
    </section>
</template>

<style lang="scss" scoped>
.about-section {
    margin-top: $container-padding + $header-height;
    padding: 2rem 1rem;

    h1 {
        font-size: 2rem;
        margin-bottom: 0.75rem;
    }

    p {
        line-height: 1.5;
        letter-spacing: 0.5px;

        &:not(:last-of-type) {
            margin-bottom: 1rem;
        }
    }
}
</style>
