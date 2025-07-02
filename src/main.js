import './scss/app.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import App from './App.vue';
import router from './router';

import content from './content';

const app = createApp(App);

const pinia = createPinia();

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: content
});

app.use(router);
app.use(pinia);
app.use(i18n);

app.mount('#app');
