<script setup>
import { computed } from 'vue';
import { useHead } from '@unhead/vue';
import { useI18n } from 'vue-i18n';

const { getLocaleMessage, locale, t } = useI18n();

const paragraphs = computed(() => {
    const messages = getLocaleMessage(locale.value);
    return messages.about.paragraphs;
});

useHead({
  title: 'Jan Kozaruk - ' + t('meta.about.title'),
  meta: [
    {
      name: 'description',
      content: t('meta.about.description')
    },
    {
      property: 'og:title',
      content: t('meta.about.title')
    },
    {
      property: 'og:description',
      content: t('meta.about.description')
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      rel: 'canonical',
      href: `https://jkcoder.eu/${locale}/about`
    }
  ]
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
