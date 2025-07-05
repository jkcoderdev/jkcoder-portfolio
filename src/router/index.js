import { createRouter, createWebHistory } from 'vue-router';

import LocaleLayout from '../views/LocaleLayout.vue';

import HomeView from '../views/HomeView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import AboutView from '../views/AboutView.vue';

import content from '../content';

const supportedLocales = Object.keys(content);

export const routes = [
  {
    path: `/:locale(${supportedLocales.join('|')})`, 
    component: LocaleLayout,
    children: [
      { path: '', name: 'home', component: HomeView },
      { path: 'about', name: 'about', component: AboutView },
      { path: 'projects', name: 'projects', component: ProjectsView }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: () => {
      const browserLanguage = navigator.language;

      for (const locale of supportedLocales) {
        if (browserLanguage.startsWith(locale)) {
          return '/' + locale;
        }
      }

      return '/en'; // Fallback locale
    }
  }
];