import './scss/app.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import { createHead } from '@vueuse/head';
import App from './App.vue';
import router from './router';

import content from './content';

const supportedLocales = Object.keys(content);

const app = createApp(App);
const pinia = createPinia();
const head = createHead();

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: content
});

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

app.use(router);
app.use(pinia);
app.use(i18n);
app.use(head);

app.mount('#app');
