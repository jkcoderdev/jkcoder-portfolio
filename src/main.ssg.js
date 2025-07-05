import './scss/app.scss';

import App from './App.vue';

import { ViteSSG } from 'vite-ssg';

// import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { createHead } from '@vueuse/head';

import { routes, createRouterInstance } from './router';
import content from './content';

const supportedLocales = Object.keys(content);

export const prerenderRoutes = [
  '/en',
  '/en/about',
  '/en/projects',
  '/pl',
  '/pl/about',
  '/pl/projects'
];

export const createApp = ViteSSG(
  App,
  { routes, includedRoutes: () => prerenderRoutes },
  ({ app, router }) => {
    const pinia = createPinia();

    const i18n = createI18n({
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
      messages: content
    });

    const head = createHead();

    router.beforeEach((to, from, next) => {
      const locale = to.params.locale;

      // If no supported locale is found, redirect to fallback
      if (!supportedLocales.includes(locale)) {
        return next('/en');
      }

      // Set locale in i18n
      i18n.global.locale.value = locale;
      next();
    });

    app.use(pinia);
    app.use(i18n);
    app.use(head);
  }
);